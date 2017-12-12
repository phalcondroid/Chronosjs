System.register(["./DatamapperOperators", "./ComparisonOperators", "../Errors/MessageCode", "../Errors/Message", "./DataType", "./Sort"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DatamapperOperators_1, ComparisonOperators_1, MessageCode_1, Message_1, DataType_1, Sort_1, Filter;
    return {
        setters: [
            function (DatamapperOperators_1_1) {
                DatamapperOperators_1 = DatamapperOperators_1_1;
            },
            function (ComparisonOperators_1_1) {
                ComparisonOperators_1 = ComparisonOperators_1_1;
            },
            function (MessageCode_1_1) {
                MessageCode_1 = MessageCode_1_1;
            },
            function (Message_1_1) {
                Message_1 = Message_1_1;
            },
            function (DataType_1_1) {
                DataType_1 = DataType_1_1;
            },
            function (Sort_1_1) {
                Sort_1 = Sort_1_1;
            }
        ],
        execute: function () {
            Filter = class Filter {
                constructor() {
                    this.first = "";
                    this.final = [];
                    this.init = false;
                    this.sort = new Array();
                    this.limit = null;
                    this.columns = {};
                }
                buildCondition(params) {
                    var index = 1;
                    var length = Object.keys(params).length;
                    for (var key in params) {
                        switch (key) {
                            case DatamapperOperators_1.DatamapperOperators.CONDITIONAL:
                                let conditional = params[key];
                                for (var keyConditional in conditional) {
                                    switch (keyConditional) {
                                        case DatamapperOperators_1.DatamapperOperators.AND:
                                            let iAnd = 1;
                                            let andContent = conditional[keyConditional];
                                            let andLength = Object.keys(andContent).length;
                                            for (let keyAnd in andContent) {
                                                this.getExpression(keyAnd, andContent[keyAnd], ComparisonOperators_1.ComparisonOperators.AND, iAnd, andLength);
                                                iAnd++;
                                            }
                                            break;
                                        case DatamapperOperators_1.DatamapperOperators.OR:
                                            let iOr = 1;
                                            let orContent = conditional[keyConditional];
                                            let orLength = Object.keys(orContent).length;
                                            for (let keyOr in orContent) {
                                                this.getExpression(keyOr, orContent[keyOr], ComparisonOperators_1.ComparisonOperators.OR, iOr, orLength);
                                                iOr++;
                                            }
                                            break;
                                        case DatamapperOperators_1.DatamapperOperators.IS_NOT:
                                            let iIsNot = 1;
                                            let isNotContent = conditional[keyConditional];
                                            let isNotLength = Object.keys(isNotContent).length;
                                            for (let keyIsNot in isNotContent) {
                                                this.getExpression(keyIsNot, isNotContent[keyIsNot], ComparisonOperators_1.ComparisonOperators.AND, iIsNot, isNotLength, ComparisonOperators_1.ComparisonOperators.DIFFERENT);
                                                iIsNot++;
                                            }
                                            break;
                                        default:
                                            break;
                                    }
                                }
                                break;
                            case DatamapperOperators_1.DatamapperOperators.SORT:
                                this.getSort(params[key]);
                                break;
                            case DatamapperOperators_1.DatamapperOperators.LIMIT:
                                this.getLimit(params[key]);
                                break;
                            case DatamapperOperators_1.DatamapperOperators.COLUMNS:
                                this.columns = params[key];
                                if (typeof params[key] != "object") {
                                    throw Message_1.Message.getCodeMessage(MessageCode_1.MessageCode.NOT_VALID_OBJECT, "$columns option");
                                }
                                break;
                            default:
                                this.getExpression(key, params[key], ComparisonOperators_1.ComparisonOperators.AND, index, length);
                                index++;
                                break;
                        }
                    }
                }
                getSort(sortContent) {
                    switch (typeof sortContent) {
                        case DataType_1.DataType.STRING_TYPE:
                            this.sort.push("data = Sort.sortByField('" + sortContent + "');");
                            break;
                        case DataType_1.DataType.OBJECT_TYPE:
                            if (Array.isArray(sortContent)) {
                                for (let sortKey in sortContent) {
                                    let sortValue = sortContent[sortKey];
                                    this.sort.push("data = Sort.sortByField(data, '" + sortValue + "')");
                                }
                            }
                            else {
                                for (let sortKey in sortContent) {
                                    let sortType = sortContent[sortKey];
                                    this.sort.push("data = Sort.sortByField(data, '" + sortKey + "');");
                                    if (sortContent[sortKey] == Sort_1.Sort.DESC) {
                                        this.sort.push("data = data.reverse();");
                                    }
                                }
                            }
                            break;
                    }
                }
                getLimit(limit) {
                    if (typeof limit == "string") {
                        limit = parseInt(limit);
                    }
                    this.limit = "data = data.slice(0, " + limit + ") ";
                }
                getExpression(key, content, operator, index, length, comparison = "==") {
                    var condition = "";
                    var finalOperator = "";
                    if (this.init) {
                        finalOperator = operator;
                    }
                    if (Array.isArray(content)) {
                        var newVal = content;
                        for (var j = 0; j < newVal.length; j++) {
                            let operatorStr = "";
                            if (j < (newVal.length - 1)) {
                                operatorStr = operator;
                            }
                            let valueByType = DataType_1.DataType.getValueByType(newVal[j]);
                            condition += "row[\"" + key + "\"] " + comparison + " " + newVal[j] + " " + operatorStr + " ";
                        }
                    }
                    else {
                        let operatorStr = "";
                        let valueByType = DataType_1.DataType.getValueByType(content);
                        condition += "row[\"" + key + "\"] " + comparison + " " + valueByType + " " + operatorStr + " ";
                    }
                    this.first += finalOperator + " ( " + condition + " ) ";
                    this.init = true;
                }
                /**
                 *
                 */
                getColumns(row) {
                    var newRow = {};
                    if (Object.keys(this.columns).length > 0) {
                        for (let key in this.columns) {
                            newRow[this.columns[key]] = row[this.columns[key]];
                        }
                    }
                    else {
                        newRow = row;
                    }
                    return newRow;
                }
                /**
                 *
                 */
                getMultipleRowValues(rsp, conds = true) {
                    var response = JSON.parse(rsp);
                    if (typeof response == "string") {
                        response = JSON.parse(response);
                    }
                    if (this.first == "") {
                        this.first = "true";
                    }
                    var data = new Array();
                    if (Array.isArray(response)) {
                        var conditions = this.first;
                        var evalValue = "if (" + conditions + ") { data.push(this.getColumns(row)); }";
                        for (let key in response) {
                            let row = response[key];
                            if (conds) {
                                eval(evalValue);
                            }
                            else {
                                data.push(this.getColumns(row));
                            }
                        }
                        if (this.sort.length > 0) {
                            var i = 0;
                            for (let key in this.sort) {
                                eval(this.sort[key]);
                                i++;
                            }
                        }
                        if (this.limit != null) {
                            eval(this.limit);
                        }
                    }
                    else {
                        if (typeof response == "object") {
                            data.push(this.getColumns(response));
                        }
                        else {
                            console.log("Response is not an object");
                        }
                    }
                    return data;
                }
                getOneRowValue(data) {
                }
            };
            exports_1("Filter", Filter);
        }
    };
});

System.register(["./Transaction", "./Not", "./NotIn", "./Sort", "./DataType"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transaction_1, Not_1, NotIn_1, Sort_1, DataType_1, Query;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            },
            function (Not_1_1) {
                Not_1 = Not_1_1;
            },
            function (NotIn_1_1) {
                NotIn_1 = NotIn_1_1;
            },
            function (Sort_1_1) {
                Sort_1 = Sort_1_1;
            },
            function (DataType_1_1) {
                DataType_1 = DataType_1_1;
            }
        ],
        execute: function () {
            Query = class Query {
                /**
                 *
                 * @param data
                 */
                constructor(data = false) {
                    this.lim = null;
                    this.sort = new Array;
                    this.data = false;
                    this.cols = new Array;
                    this.conds = null;
                    this.sortConds = false;
                    this.transactions = new Array;
                    this.negativeConds = null;
                    this.negativeTransactions = new Array();
                    this.data = data;
                }
                /**
                 *
                 */
                columns(cols) {
                    if (typeof cols == "object") {
                        this.cols = cols;
                    }
                    else {
                        throw "Column param must be an object";
                    }
                    return this;
                }
                /**
                 *
                 */
                getColumns() {
                    return Object.keys(this.data[0]);
                }
                /**
                 *
                 * @param row
                 */
                resolveColumns(row) {
                    var newRow = {};
                    if (Object.keys(this.cols).length > 0) {
                        for (let key in this.cols) {
                            newRow[this.cols[key]] = row[this.cols[key]];
                        }
                    }
                    else {
                        newRow = Object.keys(row);
                    }
                    return newRow;
                }
                /**
                 *
                 * @param condClass
                 */
                where(conditions) {
                    if (conditions instanceof Transaction_1.Transaction) {
                        if (conditions instanceof Not_1.Not || conditions instanceof NotIn_1.NotIn) {
                            this.negativeTransactions.push(conditions);
                            this.negativeConds++;
                        }
                        else {
                            this.transactions.push(conditions);
                            this.conds++;
                        }
                    }
                    return this;
                }
                limit(limit) {
                    if (typeof limit == "number") {
                        this.lim = limit;
                    }
                    else {
                        throw "limit must be number";
                    }
                    return this;
                }
                addOperator(length, operator) {
                    var cond = "";
                    if (length > 0) {
                        cond = operator + " ";
                    }
                    return cond;
                }
                /**
                 *
                 * @param conditions
                 */
                orderBy(sortContent) {
                    this.sort = sortContent;
                    this.sortConds = true;
                }
                /**
                 *
                 */
                resolveSort(results) {
                    switch (typeof this.sort) {
                        case DataType_1.DataType.STRING_TYPE:
                            results = Sort_1.Sort.sortByField(results, this.sort);
                            break;
                        case DataType_1.DataType.OBJECT_TYPE:
                            if (this.sort instanceof Array) {
                                for (let sortKey in this.sort) {
                                    let sortValue = this.sort[sortKey];
                                    results = Sort_1.Sort.sortByField(results, sortValue);
                                }
                            }
                            else {
                                for (let sortKey in this.sort) {
                                    let sortType = this.sort[sortKey];
                                    results = Sort_1.Sort.sortByField(results, sortKey);
                                    if (this.sort[sortKey] == Sort_1.Sort.DESC) {
                                        results = results.reverse();
                                    }
                                }
                            }
                            break;
                    }
                    return results;
                }
                /**
                 *
                 * @param row
                 */
                miniChecksum(row) {
                    var str = JSON.stringify(row);
                    var hash = 0;
                    var char = 0;
                    if (str.length == 0)
                        return hash;
                    for (var i = 0; i < str.length; i++) {
                        char = str.charCodeAt(i);
                        hash = ((hash << 5) - hash) + char;
                        hash = hash & hash; // Convert to 32bit integer
                    }
                    return hash;
                }
                /**
                 *
                 * @param result
                 * @param row
                 */
                ifExistOnResult(result, row) {
                    for (var key in result) {
                        if (this.miniChecksum(result[key]) == this.miniChecksum(row)) {
                            return false;
                        }
                    }
                    return true;
                }
                /**
                 *
                 */
                get() {
                    var results = new Array;
                    var limit = 1;
                    for (var key in this.data) {
                        var row = this.data[key];
                        if (this.cols != null && this.cols.length > 0) {
                            row = this.resolveColumns(row);
                        }
                        if (this.conds > 0) {
                            for (var key in this.transactions) {
                                var result = this.transactions[key].get(row);
                                if (result) {
                                    if (this.ifExistOnResult(results, row)) {
                                        results.push(row);
                                    }
                                }
                            }
                        }
                        else {
                            results.push(row);
                        }
                        if (this.lim != null) {
                            if (limit == this.lim) {
                                break;
                            }
                        }
                        limit++;
                    }
                    var newResults = new Array();
                    for (var key in results) {
                        var row = results[key];
                        if (this.negativeConds > 0) {
                            for (var key in this.negativeTransactions) {
                                var result = this.negativeTransactions[key].get(row);
                                if (result) {
                                    if (this.ifExistOnResult(newResults, row)) {
                                        newResults.push(row);
                                    }
                                }
                            }
                        }
                        else {
                            newResults.push(row);
                        }
                    }
                    if (this.sortConds) {
                        newResults = this.resolveSort(newResults);
                    }
                    return newResults;
                }
            };
            exports_1("Query", Query);
        }
    };
});

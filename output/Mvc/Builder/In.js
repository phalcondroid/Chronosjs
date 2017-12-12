System.register(["./DataType", "./Transaction"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataType_1, Transaction_1, In;
    return {
        setters: [
            function (DataType_1_1) {
                DataType_1 = DataType_1_1;
            },
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            In = class In extends Transaction_1.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.conditions = new Array;
                    if (typeof condition == "object") {
                        for (var key in condition) {
                            if (condition[key] instanceof Array) {
                                var row = condition[key];
                                for (var key2 in row) {
                                    var value2 = DataType_1.DataType.getValueByType(row[key2]);
                                    this.conditions.push("row[\"" + key + "\"]" + " == " + value2);
                                }
                            }
                            else {
                                throw "Not in value should be array";
                            }
                        }
                    }
                    else {
                        throw "Not condition must be an object";
                    }
                }
                get() {
                    return "(" + this.conditions.join(" || ") + ")";
                }
            };
            exports_1("In", In);
        }
    };
});

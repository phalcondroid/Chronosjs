System.register(["./Transaction"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transaction_1, Or;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            Or = class Or extends Transaction_1.Transaction {
                /**
                 *
                 * @param condition
                 */
                constructor(condition) {
                    super();
                    /**
                     *
                     */
                    this.condition = {};
                    if (typeof condition == "object") {
                        this.condition = condition;
                    }
                    else {
                        throw "And condition must be an object";
                    }
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    if (this.condition instanceof Transaction_1.Transaction) {
                        result.push(this.condition.get(row));
                    }
                    for (var key in row) {
                        if (this.condition[key] instanceof Transaction_1.Transaction) {
                            result.push(this.condition[key].get(row));
                        }
                        else {
                            if (row[key] == this.condition[key]) {
                                result.push(true);
                            }
                        }
                    }
                    for (let i = 0; i < size; i++) {
                        if (result[i] == true) {
                            return true;
                        }
                    }
                    return false;
                }
            };
            exports_1("Or", Or);
        }
    };
});

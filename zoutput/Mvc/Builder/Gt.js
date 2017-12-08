System.register(["./Transaction"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transaction_1, Gt;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            Gt = class Gt extends Transaction_1.Transaction {
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
                    for (var key in row) {
                        if (row[key] > this.condition[key]) {
                            result.push(true);
                        }
                    }
                    if (result.length != size) {
                        return false;
                    }
                    for (var i = 1; i <= size; i++) {
                        if (result[i] == false) {
                            return false;
                        }
                    }
                    return true;
                }
            };
            exports_1("Gt", Gt);
        }
    };
});

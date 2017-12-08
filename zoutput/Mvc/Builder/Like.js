System.register(["./Transaction"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transaction_1, Like;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            Like = class Like extends Transaction_1.Transaction {
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
                        return;
                    }
                    throw "And condition must be an object";
                }
                /**
                 *
                 */
                get(row) {
                    var result = new Array();
                    var size = Object.keys(this.condition).length;
                    for (var key in this.condition) {
                        if (this.condition[key] != "" && typeof row[key] == "string") {
                            //console.log("->", row[key], this.condition[key], this.condition[key].replace(/[^A-Za-z0-9\s]/g, ""));
                            var regexp = new RegExp(this.condition[key], "i");
                            if (regexp.test(row[key].replace(/([^a-z_0-9\s]+)/gi, ''))) {
                                return true;
                            }
                            return false;
                        }
                    }
                    return false;
                }
            };
            exports_1("Like", Like);
        }
    };
});

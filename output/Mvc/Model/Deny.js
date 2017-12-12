System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Deny;
    return {
        setters: [],
        execute: function () {
            Deny = class Deny {
                /**
                 * Get deny methods
                 */
                static getDeny() {
                    return [
                        "state",
                        "source",
                        "insertUrl",
                        "deleteUrl",
                        "updateUrl",
                        "findUrl",
                        "params",
                        "internalId",
                        "method"
                    ];
                }
            };
            exports_1("Deny", Deny);
        }
    };
});

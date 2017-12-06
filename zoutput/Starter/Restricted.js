System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Restricted;
    return {
        setters: [],
        execute: function () {
            Restricted = class Restricted {
                static get() {
                    let restricted = [
                        "constructor",
                        "initialize",
                        "getById",
                        "getByTag",
                        "getByClass",
                        "getDi",
                        "hasKey",
                        "setPersistent",
                        "getPersistent",
                        "get",
                        "set",
                        "setDi",
                        "getUrl",
                        "setUrl",
                        "getAjax",
                        "setAjax",
                        "getDom",
                        "setDom",
                        "setEm",
                        "getEm",
                        "setEntityManager",
                        "getEntityManager",
                        "setContainer",
                        "getContainer",
                        "setTag",
                        "getTag",
                        "setEvent",
                        "getEvent",
                        "setGlobals",
                        "getGlobals"
                    ];
                }
            };
            exports_1("Restricted", Restricted);
        }
    };
});

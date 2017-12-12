System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Scope;
    return {
        setters: [],
        execute: function () {
            Scope = class Scope {
            };
            Scope.LOCAL = 0;
            Scope.DEV = 1;
            Scope.TEST = 2;
            Scope.QA = 3;
            Scope.STAGING = 4;
            Scope.PRODUCTION = 5;
            exports_1("Scope", Scope);
        }
    };
});

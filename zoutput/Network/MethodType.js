System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MethodType;
    return {
        setters: [],
        execute: function () {
            MethodType = class MethodType {
            };
            MethodType.POST = "POST";
            MethodType.GET = "GET";
            MethodType.PUT = "PUT";
            MethodType.DELETE = "DELETE";
            exports_1("MethodType", MethodType);
        }
    };
});

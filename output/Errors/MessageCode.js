System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageCode;
    return {
        setters: [],
        execute: function () {
            MessageCode = class MessageCode {
            };
            MessageCode.NOT_VALID_ARRAY = 1;
            MessageCode.NOT_VALID_ARRAY_OBJECT = 2;
            MessageCode.NOT_VALID_OBJECT = 3;
            exports_1("MessageCode", MessageCode);
        }
    };
});

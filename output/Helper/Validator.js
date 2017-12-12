System.register(["../Errors/Message"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Message_1, Validator;
    return {
        setters: [
            function (Message_1_1) {
                Message_1 = Message_1_1;
            }
        ],
        execute: function () {
            Validator = class Validator {
                static validStructArray(data) {
                    try {
                        if (Array.isArray(data)) {
                            var firstPosition = data[0];
                            if (typeof firstPosition == "object") {
                                return true;
                            }
                            else {
                                throw Message_1.Message.NOT_VALID_ARRAY_OBJECT;
                            }
                        }
                        else {
                            throw Message_1.Message.NOT_VALID_ARRAY;
                        }
                    }
                    catch (e) {
                    }
                }
            };
            exports_1("Validator", Validator);
        }
    };
});

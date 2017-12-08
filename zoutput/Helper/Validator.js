System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Validator;
    return {
        setters: [],
        execute: function () {
            Validator = class Validator {
                static validStructArray(data) {
                    var message = Northwind.Errors.Message;
                    try {
                        if (Array.isArray(data)) {
                            var firstPosition = data[0];
                            if (typeof firstPosition == "object") {
                                return true;
                            }
                            else {
                                throw message.NOT_VALID_ARRAY_OBJECT;
                            }
                        }
                        else {
                            throw message.NOT_VALID_ARRAY;
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

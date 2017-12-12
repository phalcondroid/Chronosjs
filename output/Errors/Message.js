System.register(["./MessageCode"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MessageCode_1, Message;
    return {
        setters: [
            function (MessageCode_1_1) {
                MessageCode_1 = MessageCode_1_1;
            }
        ],
        execute: function () {
            Message = class Message {
                /**
                 *
                 * @param code
                 * @param custom
                 */
                static getCodeMessage(code, custom) {
                    var custom = " => " + custom;
                    switch (code) {
                        case MessageCode_1.MessageCode.NOT_VALID_ARRAY:
                            return Message.NOT_VALID_ARRAY + custom;
                        case MessageCode_1.MessageCode.NOT_VALID_ARRAY_OBJECT:
                            return Message.NOT_VALID_ARRAY_OBJECT + custom;
                        case MessageCode_1.MessageCode.NOT_VALID_OBJECT:
                            return Message.NOT_VALID_OBJECT + custom;
                    }
                }
            };
            /**
             *
             */
            Message.NOT_VALID_ARRAY = "The object returned in the transaction is not array";
            /**
             *
             */
            Message.NOT_VALID_ARRAY_OBJECT = "The objects returned in the transaction into array are not objects, every row must be object key, value";
            /**
             *
             */
            Message.NOT_VALID_OBJECT = "The received variable is not an object";
            exports_1("Message", Message);
        }
    };
});

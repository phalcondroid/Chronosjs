System.register(["../../../../../Di/Service", "./forms/FormTag"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, FormTag_1, Input;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (FormTag_1_1) {
                FormTag_1 = FormTag_1_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Input = class Input extends FormTag_1.FormTag {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("INPUT"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /**
                 * [type description]
                 * @param  {[type]} type [description]
                 * @return {[type]}      [description]
                 */
                type(type) {
                    this.attr("type", type);
                    return this;
                }
                /**
                 *
                 */
                setText() {
                    this.attr("type", "text");
                    return this;
                }
                /**
                 *
                 */
                setHidden() {
                    this.attr("type", "hidden");
                    return this;
                }
                /**
                 *
                 */
                setNumber() {
                    this.attr("type", "number");
                    return this;
                }
                /**
                 *
                 */
                setDate() {
                    this.attr("type", "number");
                    return this;
                }
                /**
                 *
                 */
                setFile() {
                    this.attr("type", "file");
                    return this;
                }
            };
            Input.NUMBERS = 0;
            Input.TEXT = 1;
            Input.NO_SPECIAL_CHARACTERS = 2;
            Input.TEXT_NO_SPECIAL_CHARACTERS = 3;
            Input.NUMBERS_NO_SPECIAL_CHARACTERS = 4;
            exports_1("Input", Input);
        }
    };
});

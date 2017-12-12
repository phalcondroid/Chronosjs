System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, Option;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Option = class Option extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("OPTION"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                setValue(val) {
                    this.attr("value", val);
                    return this;
                }
                /**
                 *
                 */
                getValue() {
                    return this.attr("value");
                }
                /**
                 *
                 */
                setContent(content) {
                    this.append(content);
                    return this;
                }
                /**
                 *
                 */
                getContent() {
                    return this.getElement().text;
                }
            };
            exports_1("Option", Option);
        }
    };
});

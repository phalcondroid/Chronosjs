System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, Ul;
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
             * [ViewElement description]
             * @type {[type]}
             */
            Ul = class Ul extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("UL"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
            };
            exports_1("Ul", Ul);
        }
    };
});

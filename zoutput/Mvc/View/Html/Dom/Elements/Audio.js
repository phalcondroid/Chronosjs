System.register(["../Wrappers/HtmlElement", "../../../../../Di/Service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HtmlElement_1, Service_1, Audio;
    return {
        setters: [
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Audio = class Audio extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("DB"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
            };
            exports_1("Audio", Audio);
        }
    };
});

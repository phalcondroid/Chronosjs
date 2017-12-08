System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, Img;
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
            Img = class Img extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("IMG"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                width(width) {
                    this.getElement().style.width = width;
                    return this;
                }
                height(height) {
                    this.getElement().style.width = height;
                    return this;
                }
                src(src) {
                    this.attr("src", src);
                    return this;
                }
            };
            exports_1("Img", Img);
        }
    };
});

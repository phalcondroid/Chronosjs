System.register(["../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HtmlElement_1, Bdo;
    return {
        setters: [
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            }
        ],
        execute: function () {
            /**
             * [ViewElement description]
             * @type {[type]}
             */
            Bdo = class Bdo extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BDO"));
                    this.setDi(new Service);
                    this.initialize(args);
                }
            };
            exports_1("Bdo", Bdo);
        }
    };
});

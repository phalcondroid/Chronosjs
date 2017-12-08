System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, Th;
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
            Th = class Th extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("TH"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /*
                    *
                    * @param  {[type]} num [description]
                    * @return {[type]}     [description]
                    */
                colspan(cols) {
                    this.attr({
                        "colspan": cols
                    });
                    return this;
                }
                /**
                 *
                 * @param  {[type]} row [description]
                 * @return {[type]}     [description]
                 */
                rowspan(rows) {
                    this.attr({
                        "rowspan": rows
                    });
                    return this;
                }
            };
            exports_1("Th", Th);
        }
    };
});

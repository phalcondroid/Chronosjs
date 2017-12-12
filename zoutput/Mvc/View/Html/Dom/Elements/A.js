System.register(["./I", "../../../../../Di/Service", "../Wrappers/HtmlElement"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var I_1, Service_1, HtmlElement_1, A;
    return {
        setters: [
            function (I_1_1) {
                I_1 = I_1_1;
            },
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
             */
            A = class A extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("A"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /**
                 * [favIcon description]
                 * @return {[type]} [description]
                 */
                favIcon(favIcon) {
                    let icon = new I_1.I()
                        .class(favIcon);
                    this.append(icon.getElement());
                    return this;
                }
                /**
                 * [href description]
                 * @param  {[type]} href [description]
                 * @return {[type]}      [description]
                 */
                href(href) {
                    this.attr("href", href);
                    return this;
                }
            };
            exports_1("A", A);
        }
    };
});

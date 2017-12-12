System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement", "./I"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, I_1, Button;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            },
            function (I_1_1) {
                I_1 = I_1_1;
            }
        ],
        execute: function () {
            /**
             *
             */
            Button = class Button extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.setElement(document.createElement("BUTTON"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /**
                 *
                 * @param
                 * @return
                 */
                type(type) {
                    this.attr("type", type);
                    return this;
                }
                /**
                 *
                 * @return
                 */
                favIcon(favIcon) {
                    let icon = new I_1.I()
                        .class(favIcon);
                    this.append(icon);
                    return this;
                }
                /**
                 *
                 * @return
                 */
                success() {
                    this.addClass("btn btn-success");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                notice() {
                    this.addClass("btn btn-notice");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                default() {
                    this.addClass("btn btn-default");
                    return this;
                }
                /**
                 *
                 * @return
                 */
                primary() {
                    this.addClass("btn btn-primary");
                    return this;
                }
                /**
                 * [warning description]
                 * @return {[type]} [description]
                 */
                warning() {
                    this.addClass("btn btn-warning");
                    return this;
                }
                /**
                 * [danger description]
                 * @return {[type]} [description]
                 */
                danger() {
                    this.addClass("btn btn-danger");
                    return this;
                }
            };
            exports_1("Button", Button);
        }
    };
});

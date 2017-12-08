System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement", "../Adapter/ElementAdapter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, ElementAdapter_1, Form;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            },
            function (ElementAdapter_1_1) {
                ElementAdapter_1 = ElementAdapter_1_1;
            }
        ],
        execute: function () {
            /**
             *
             * @type
             */
            Form = class Form extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    /**
                     *
                     */
                    this.invalidElements = new Array;
                    this.setElement(document.createElement("FORM"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /**
                 * @param {Function} fn
                 */
                submit(fn) {
                    this.getElement().addEventListener("submit", function (event) {
                        let returnCallback = fn.bind(this)(event);
                        if (returnCallback == false || typeof returnCallback == "undefined") {
                            event.preventDefault();
                        }
                        return true;
                    }.bind(this));
                }
                /**
                 *
                 */
                getInvalidElements() {
                    return this.invalidElements;
                }
                /**
                 *
                 */
                validate(fn) {
                    let elements = this.getFormElements();
                    this.invalidElements = new Array;
                    if (elements.length > 0) {
                        for (let item of elements) {
                            if (item.val() == "") {
                                this.invalidElements.push(item);
                            }
                        }
                        if (this.invalidElements.length == 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    return false;
                }
                /**
                 *
                 */
                getFormElements() {
                    let northwindElements = new Array;
                    let elements = this.getElement().elements;
                    for (let item of elements) {
                        let aux = new ElementAdapter_1.ElementAdapter(item);
                        let element = aux.get();
                        if (element != false) {
                            northwindElements.push(element);
                        }
                    }
                    return northwindElements;
                }
                /**
                 *
                 */
                setAutoComplete(data) {
                    if (data) {
                        this.attr("autocomplete", "on");
                    }
                    else {
                        this.attr("autocomplete", "off");
                    }
                    return this;
                }
                /**
                 *
                 */
                getAutoComplete() {
                    return this.attr("autocomplete");
                }
            };
            exports_1("Form", Form);
        }
    };
});

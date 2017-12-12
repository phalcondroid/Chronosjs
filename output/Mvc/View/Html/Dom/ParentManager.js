System.register(["./Adapter/ElementAdapter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ElementAdapter_1, ParentManager;
    return {
        setters: [
            function (ElementAdapter_1_1) {
                ElementAdapter_1 = ElementAdapter_1_1;
            }
        ],
        execute: function () {
            ParentManager = class ParentManager {
                constructor() {
                }
                getParent() {
                    let parent = this.element.parentElement;
                    if (parent.nodeType == 1) {
                        let adapter = new ElementAdapter_1.ElementAdapter(parent);
                        let tagObject = adapter.get();
                        return tagObject;
                    }
                    return false;
                }
                getSiblings() {
                    let siblings = this.getParent().getChilds();
                    if (siblings.length > 0) {
                        let aux = new Array;
                        for (let item of siblings) {
                            if (item.getElement() != this.getElement()) {
                                aux.push(item);
                            }
                        }
                        return aux;
                    }
                    return false;
                }
                getChilds() {
                    let childNodes = this.element.childNodes;
                    let childs = new Array();
                    for (let key in childNodes) {
                        if (childNodes[key].nodeType == 1) {
                            let adapter = new ElementAdapter_1.ElementAdapter(childNodes[key]);
                            let tagObject = adapter.get();
                            childs.push(tagObject);
                        }
                    }
                    return childs;
                }
                /**
                 *
                 */
                setElement(element) {
                    this.element = element;
                    return this;
                }
                /**
                 *
                 */
                getElement() {
                    return this.element;
                }
            };
            exports_1("ParentManager", ParentManager);
        }
    };
});

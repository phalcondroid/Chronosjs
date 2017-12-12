System.register(["../../../../../Di/Service", "./forms/FormTag", "./Option", "../../../../Model/StaticModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, FormTag_1, Option_1, StaticModel_1, Select;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (FormTag_1_1) {
                FormTag_1 = FormTag_1_1;
            },
            function (Option_1_1) {
                Option_1 = Option_1_1;
            },
            function (StaticModel_1_1) {
                StaticModel_1 = StaticModel_1_1;
            }
        ],
        execute: function () {
            Select = class Select extends FormTag_1.FormTag {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.choose = "Choose...";
                    this.setElement(document.createElement("SELECT"));
                    this.setDi(new Service_1.Service);
                    this.initialize(args);
                }
                /**
                 *
                 */
                getSelected() {
                    var option = new Option_1.Option();
                    option.setElement(this.getElement().options[this.getElement().selectedIndex]);
                    return option;
                }
                /**
                 *
                 * @param fn
                 */
                iterate(fn) {
                    var childs = this.getChilds();
                    for (var key in childs) {
                        fn(childs[key]);
                    }
                    return this;
                }
                /**
                 *
                 */
                setChoose(choose) {
                    this.choose = choose;
                }
                /**
                 *
                 */
                select(value) {
                    var childs = this.getElement().childNodes;
                    for (var key in childs) {
                        if (childs[key].value == value) {
                            childs[key].setAttribute("selected", "selected");
                        }
                    }
                }
                /**
                 *
                 * @param  content
                 * @return
                 */
                build(content, fields) {
                    if (content instanceof StaticModel_1.StaticModel) {
                        content = JSON.parse(content.getData());
                    }
                    var i = 0;
                    for (let key in content) {
                        let option = new Option_1.Option();
                        let id = content[key][fields[0]];
                        if (id === "") {
                            id = content[key][fields[1]];
                        }
                        option.attr({
                            "value": id
                        });
                        option.append(content[key][fields[1]]);
                        this.append([
                            option
                        ]);
                        i++;
                    }
                    return this;
                }
            };
            exports_1("Select", Select);
        }
    };
});

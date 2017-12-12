System.register(["../../../../../Di/Service", "../Wrappers/HtmlElement", "./Thead", "./Tbody", "./Tfoot", "./Tr"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, HtmlElement_1, Thead_1, Tbody_1, Tfoot_1, Tr_1, Table;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (HtmlElement_1_1) {
                HtmlElement_1 = HtmlElement_1_1;
            },
            function (Thead_1_1) {
                Thead_1 = Thead_1_1;
            },
            function (Tbody_1_1) {
                Tbody_1 = Tbody_1_1;
            },
            function (Tfoot_1_1) {
                Tfoot_1 = Tfoot_1_1;
            },
            function (Tr_1_1) {
                Tr_1 = Tr_1_1;
            }
        ],
        execute: function () {
            /**
             * [Table description]
             * @type {[type]}
             */
            Table = class Table extends HtmlElement_1.HtmlElement {
                /**
                 *
                 */
                constructor(args = {}) {
                    super();
                    this.header = false;
                    this.setElement(document.createElement("BR"));
                    this.setDi(new Service_1.Service);
                    this.thead = new Thead_1.Thead();
                    this.tbody = new Tbody_1.Tbody();
                    this.tfoot = new Tfoot_1.Tfoot();
                    this.initialize(args);
                }
                /**
                 *
                 */
                getThead() {
                    return this.thead;
                }
                /**
                 *
                 */
                getTbody() {
                    return this.tbody;
                }
                /**
                 *
                 */
                toHead(component) {
                    this.thead.append(component);
                    this.append(this.thead);
                    return this;
                }
                /**
                 *
                 */
                toHeadTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.thead.append(tr);
                    this.append(this.thead);
                    return this;
                }
                /**
                 *
                 */
                toBody(component) {
                    this.tbody.append(component);
                    this.append(this.tbody);
                    return this;
                }
                /**
                 *
                 */
                toFoot(component) {
                    this.tfoot.append(component);
                    this.append(this.tfoot);
                    return this;
                }
                /**
                 *
                 */
                toBodyTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.tbody.append(tr);
                    this.append(this.tbody);
                    return this;
                }
                /**
                 *
                 */
                toFootTr(component) {
                    let tr = new Tr_1.Tr();
                    tr.append(component);
                    this.tfoot.append(tr);
                    this.append(this.tfoot);
                    return this;
                }
            };
            exports_1("Table", Table);
        }
    };
});

System.register(["./StaticModel", "../../Di/SessionStorage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StaticModel_1, SessionStorage_1, AjaxModelPersistent;
    return {
        setters: [
            function (StaticModel_1_1) {
                StaticModel_1 = StaticModel_1_1;
            },
            function (SessionStorage_1_1) {
                SessionStorage_1 = SessionStorage_1_1;
            }
        ],
        execute: function () {
            AjaxModelPersistent = class AjaxModelPersistent extends StaticModel_1.StaticModel {
                constructor() {
                    super(...arguments);
                    this.container = new SessionStorage_1.SessionStorage;
                    this.insertUrl = null;
                    this.deleteUrl = null;
                    this.updateUrl = null;
                    this.findUrl = null;
                    this.method = "POST";
                }
                setSource(data) {
                    this.setInsertUrl(data.find);
                    this.setUpdateUrl(data.update);
                    this.setInsertUrl(data.insert);
                    this.setFindUrl(data.insert);
                }
                setAjaxInit(value) {
                    this.container.set("ajaxInit_" + this.getClassName(), value);
                }
                getAjaxInit() {
                    return this.container.get("ajaxInit_" + this.getClassName());
                }
                setInsertUrl(url) {
                    this.insertUrl = url;
                }
                setFindUrl(url) {
                    this.findUrl = url;
                }
                setDeleteUrl(url) {
                    this.deleteUrl = url;
                }
                setUpdateUrl(url) {
                    this.updateUrl = url;
                }
                getInsertUrl() {
                    return this.insertUrl;
                }
                getFindUrl() {
                    return this.findUrl;
                }
                getDeleteUrl() {
                    return this.deleteUrl;
                }
                getUpdateUrl() {
                    return this.updateUrl;
                }
                setParams(params) {
                    this.params = params;
                }
                getParams() {
                    return this.params;
                }
                setMethod(method) {
                    this.method = method;
                }
                getMethod() {
                    return this.method;
                }
            };
            exports_1("AjaxModelPersistent", AjaxModelPersistent);
        }
    };
});

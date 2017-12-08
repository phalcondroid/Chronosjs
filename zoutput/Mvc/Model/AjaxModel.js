System.register(["./RawModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RawModel_1, AjaxModel;
    return {
        setters: [
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            }
        ],
        execute: function () {
            AjaxModel = class AjaxModel extends RawModel_1.RawModel {
                constructor() {
                    super();
                    this.insertUrl = null;
                    this.deleteUrl = null;
                    this.updateUrl = null;
                    this.findUrl = null;
                    this.findOneUrl = null;
                    this.countUrl = null;
                    this.method = "POST";
                    this.initialize();
                }
                setSource(data) {
                    this.setInsertUrl(data.insert);
                    this.setUpdateUrl(data.update);
                    this.setInsertUrl(data.insert);
                    this.setCountUrl(data.count);
                    this.setFindOneUrl(data.findOne);
                    this.setFindUrl(data.find);
                }
                setInsertUrl(url) {
                    this.insertUrl = url;
                }
                setFindUrl(url) {
                    this.findUrl = url;
                }
                setFindOneUrl(url) {
                    this.findOneUrl = url;
                }
                setCountUrl(url) {
                    this.countUrl = url;
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
            exports_1("AjaxModel", AjaxModel);
        }
    };
});

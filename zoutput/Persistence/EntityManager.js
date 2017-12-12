System.register(["./Filter", "./Hydrator", "../Network/Ajax", "../Di/Service", "./UnitOfWork", "../Di/Container", "../Mvc/Model/RawModel", "../Mvc/Model/AjaxModel", "../Reflection/Reflection", "../Mvc/Model/StaticModel", "../Mvc/Model/AjaxModelPersistent"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Filter_1, Hydrator_1, Ajax_1, Service_1, UnitOfWork_1, Container_1, RawModel_1, AjaxModel_1, Reflection_1, StaticModel_1, AjaxModelPersistent_1, EntityManager;
    return {
        setters: [
            function (Filter_1_1) {
                Filter_1 = Filter_1_1;
            },
            function (Hydrator_1_1) {
                Hydrator_1 = Hydrator_1_1;
            },
            function (Ajax_1_1) {
                Ajax_1 = Ajax_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (UnitOfWork_1_1) {
                UnitOfWork_1 = UnitOfWork_1_1;
            },
            function (Container_1_1) {
                Container_1 = Container_1_1;
            },
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            },
            function (AjaxModel_1_1) {
                AjaxModel_1 = AjaxModel_1_1;
            },
            function (Reflection_1_1) {
                Reflection_1 = Reflection_1_1;
            },
            function (StaticModel_1_1) {
                StaticModel_1 = StaticModel_1_1;
            },
            function (AjaxModelPersistent_1_1) {
                AjaxModelPersistent_1 = AjaxModelPersistent_1_1;
            }
        ],
        execute: function () {
            EntityManager = class EntityManager {
                /**
                 * Entity manager is a class
                 */
                constructor() {
                    this.ajax = null;
                    this.hydrator = null;
                    this.container = new Container_1.Container();
                    this.uow = new UnitOfWork_1.UnitOfWork;
                    this.di = new Service_1.Service;
                }
                /**
                 *
                 */
                getContainer() {
                    return this.container;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                find(model, params = {}) {
                    this.setWhenIsModel(model, params, "find");
                    return this;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                findOne(model, params = {}) {
                    this.setWhenIsModel(model, params, "findOne");
                    return this;
                }
                /**
                 *
                 * @param model
                 * @param params
                 */
                count(model, params = {}) {
                    this.setWhenIsModel(model, params, "count");
                    return this;
                }
                /**
                 *
                 */
                setWhenIsModel(model, params, type) {
                    let objModel = new model();
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjModel", objModel);
                    this.getContainer()
                        .set("transactionParams", params);
                    this.getContainer()
                        .set("transactionType", type);
                    if (objModel instanceof RawModel_1.RawModel) {
                        let callAjax = false;
                        if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                            if (objModel.getAjaxInit() === null) {
                                this.callAjax(objModel, type, params);
                            }
                        }
                        else if (objModel instanceof AjaxModel_1.AjaxModel) {
                            this.callAjax(objModel, type, params);
                        }
                    }
                    else {
                        throw "Model must be instance of RawModel";
                    }
                }
                callAjax(objModel, type, params) {
                    this.ajax = new Ajax_1.Ajax();
                    var url = null;
                    switch (type) {
                        case "find":
                            url = objModel.getFindUrl();
                            break;
                        case "findOne":
                            url = objModel.getFindOneUrl();
                            break;
                        case "insert":
                            url = objModel.getInsertUrl();
                            break;
                        case "update":
                            url = objModel.getUpdateUrl();
                            break;
                        case "delete":
                            url = objModel.getDeleteUrl();
                            break;
                        case "count":
                            url = objModel.getCountUrl();
                            break;
                    }
                    if (url == null) {
                        url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(objModel.getClassName()) +
                            this.ucfirst(type);
                    }
                    this.ajax.setUrl(url);
                    this.ajax.setParams(params);
                    this.ajax.setMethod(objModel.getMethod());
                }
                /**
                 *
                 */
                ucfirst(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
                /**
                 *
                 */
                lcfirst(str) {
                    return str.charAt(0).toLowerCase() + str.slice(1);
                }
                /**
                 *
                 */
                save(model) {
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjectModel", model);
                    this.getContainer()
                        .set("transactionType", "save");
                    if (model instanceof AjaxModel_1.AjaxModel) {
                        this.ajax = new Ajax_1.Ajax();
                        var modelName = model.getClassName();
                        switch (model.state) {
                            case UnitOfWork_1.UnitOfWork.NEW:
                                var url = model.getInsertUrl();
                                if (url == null) {
                                    url = this.getDi().get("url").get("baseUrl") +
                                        this.lcfirst(modelName) +
                                        "Insert";
                                }
                                this.ajax.setUrl(url);
                                break;
                            case UnitOfWork_1.UnitOfWork.CREATED:
                                var url = model.getUpdateUrl();
                                if (url == null) {
                                    url = this.getDi().get("url").get("baseUrl") +
                                        this.lcfirst(modelName) +
                                        "Update";
                                }
                                this.ajax.setUrl(url);
                                break;
                        }
                        var reflection = new Reflection_1.Reflection();
                        var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                        var objParams = {};
                        objParams[modelName] = attrsAsString;
                        this.ajax.setParams(objParams);
                        this.ajax.setMethod(model.getMethod());
                    }
                    else if (model instanceof StaticModel_1.StaticModel) {
                        switch (model.state) {
                            case UnitOfWork_1.UnitOfWork.NEW:
                                let tempData = model.getData();
                                break;
                            case UnitOfWork_1.UnitOfWork.CREATED:
                                break;
                        }
                    }
                    return this;
                }
                /**
                 *
                 */
                delete(model) {
                    this.getContainer()
                        .set("transactionModel", model);
                    this.getContainer()
                        .set("transactionObjectModel", model);
                    this.getContainer()
                        .set("transactionType", "delete");
                    if (model instanceof AjaxModel_1.AjaxModel) {
                        this.ajax = new Ajax_1.Ajax();
                        var modelName = model.getClassName();
                        var url = model.getDeleteUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                                this.lcfirst(modelName) +
                                "Delete";
                        }
                        this.ajax.setUrl(url);
                        var reflection = new Reflection_1.Reflection();
                        var attrsAsString = JSON.stringify(reflection.getAtttributeAsObjects(model));
                        var objParams = {};
                        objParams[modelName] = attrsAsString;
                        this.ajax.setParams(objParams);
                        this.ajax.setMethod(model.getMethod());
                    }
                    else if (model instanceof StaticModel_1.StaticModel) {
                        switch (model.state) {
                            case UnitOfWork_1.UnitOfWork.NEW:
                                let tempData = model.getData();
                                break;
                            case UnitOfWork_1.UnitOfWork.CREATED:
                                break;
                        }
                    }
                    return this;
                }
                /**
                 *
                 */
                response(fn) {
                    var model = this.getContainer()
                        .get("transactionModel");
                    var objModel = this.getContainer()
                        .get("transactionObjModel");
                    var type = this.getContainer()
                        .get("transactionType");
                    if (type == "save" || type == "delete") {
                        this.ajax.response(function (response) {
                            return fn(this.setResponse(response, objModel, type, model));
                        }.bind(this));
                        this.ajax.send();
                    }
                    else {
                        if (type == "find" || type == "findOne" || type == "count") {
                            var params = this.getContainer()
                                .get("transactionParams");
                        }
                        this.checkModel(fn, type, model, objModel, params);
                    }
                    return this;
                }
                /**
                 *
                 */
                checkModel(fn, type, model, objModel, params) {
                    if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                        let data = objModel.getData();
                        if (objModel.getAjaxInit() == null) {
                            this.setResponseAjax(fn, type, model, objModel, params);
                        }
                        else {
                            this.setResponseStatic(fn, objModel, type, model, params);
                        }
                    }
                    else {
                        if (objModel instanceof AjaxModel_1.AjaxModel) {
                            this.setResponseAjax(fn, type, model, objModel, params);
                        }
                        else {
                            if (objModel instanceof StaticModel_1.StaticModel) {
                                this.setResponseStatic(fn, objModel, type, model, params);
                            }
                        }
                    }
                }
                /**
                 *
                 */
                setResponseAjax(fn, type, model, objModel, params) {
                    this.ajax.response(function (response) {
                        return fn(this.setResponse(response, objModel, type, model, params));
                    }.bind(this));
                    this.ajax.send();
                }
                /**
                 *
                 */
                setResponseStatic(fn, objModel, type, model, params) {
                    fn(this.setResponse(objModel.getData(), objModel, type, model, params));
                }
                /**
                 *
                 */
                setResponse(data, objModel, type, model, params) {
                    let resultSet = new Array();
                    switch (type) {
                        case "count":
                        case "findOne":
                            resultSet = this.getResultSet(data, params, model, objModel);
                            if (resultSet != false) {
                                resultSet = resultSet[0];
                            }
                            break;
                        case "find":
                            resultSet = this.getResultSet(data, params, model, objModel);
                            break;
                        case "delete":
                        case "save":
                            resultSet = data;
                            break;
                    }
                    return resultSet;
                }
                /**
                 *
                 */
                getResultSet(response, params, model, objModel) {
                    let resultSet = new Array();
                    let hydrator = new Hydrator_1.Hydrator;
                    let filters = new Filter_1.Filter;
                    filters.buildCondition(params);
                    var data = new Array();
                    if (objModel instanceof AjaxModelPersistent_1.AjaxModelPersistent) {
                        if (objModel.getAjaxInit() == null) {
                            objModel.setAjaxInit(true);
                            objModel.setData(response);
                        }
                        data = filters.getMultipleRowValues(response, false);
                    }
                    else if (objModel instanceof AjaxModel_1.AjaxModel) {
                        data = filters.getMultipleRowValues(response, false);
                    }
                    else {
                        data = filters.getMultipleRowValues(response);
                    }
                    var i = 0;
                    for (let key in data) {
                        let newModel = hydrator.hydrate(model, data[key]);
                        if (newModel instanceof StaticModel_1.StaticModel) {
                            newModel.setIndex(i);
                        }
                        resultSet.push(newModel);
                        i++;
                    }
                    if (resultSet.length == 0) {
                        resultSet = false;
                    }
                    return resultSet;
                }
                /**
                 *
                 */
                flush() {
                    return false;
                }
                /**
                 *
                 */
                reset() {
                    return false;
                }
                /**
                 *
                 */
                group() {
                    return {};
                }
                /**
                 *
                 */
                distinct() {
                    return {};
                }
                /**
                 *
                 */
                purge() {
                    return false;
                }
                /**
                 *
                 */
                forget() {
                    return false;
                }
                checksum(obj) {
                    var keys = Object.keys(obj).sort();
                    var output = [], prop;
                    for (var i = 0; i < keys.length; i++) {
                        prop = keys[i];
                        output.push(prop);
                        output.push(obj[prop]);
                    }
                    return JSON.stringify(output);
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                setDi(di) {
                    this.di = di;
                }
                /**
                 *
                 */
                getDi() {
                    return this.di;
                }
            };
            exports_1("EntityManager", EntityManager);
        }
    };
});

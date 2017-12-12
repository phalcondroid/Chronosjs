
import { Filter } from "./Filter";
import { Hydrator } from "./Hydrator";
import { Ajax } from "../Network/Ajax";
import { Service } from "../Di/Service";
import { UnitOfWork } from "./UnitOfWork";
import { Container } from "../Di/Container";
import { RawModel } from "../Mvc/Model/RawModel";
import { AjaxModel } from "../Mvc/Model/AjaxModel";
import { Reflection } from "../Reflection/Reflection";
import { StaticModel } from "../Mvc/Model/StaticModel";
import { AjaxModelPersistent } from "../Mvc/Model/AjaxModelPersistent";

export class EntityManager
{
    uow                : UnitOfWork;
    private di;
    private ajax       : Ajax = null;
    private hydrator   : Hydrator = null;
    private source     : string;
    private model      : Object;
    private fnResponse : Function;
    private resultSet  : any;
    private container  = new Container();

    /**
     * Entity manager is a class
     */
    public constructor()
    {
        this.uow = new UnitOfWork;
        this.di  = new Service; 
    }

    /**
     * 
     */
    private getContainer()
    {
        return this.container;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    public find(model : any, params : Object = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "find"
        );
        return this;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    public findOne(model : any, params : Object = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "findOne"
        );
        return this;
    }

    /**
     * 
     * @param model 
     * @param params 
     */
    public count(model : any, params : Object = {})
    {
        this.setWhenIsModel(
            model,
            params,
            "count"
        );
        return this;
    }

    /**
     *
     */
    public setWhenIsModel(model, params, type)
    {
        let objModel = new model();

        this.getContainer()
            .set("transactionModel", model);

        this.getContainer()
            .set("transactionObjModel", objModel);

        this.getContainer()
            .set("transactionParams", params);

        this.getContainer()
            .set(
            "transactionType",
            type
        );

        if (objModel instanceof RawModel) {
            let callAjax = false;
            
            if (objModel instanceof AjaxModelPersistent) {
                if (objModel.getAjaxInit() === null) {
                    this.callAjax(objModel, type, params);
                }
            } else if (objModel instanceof AjaxModel) {
                this.callAjax(objModel, type, params);
            }
        } else {
            throw "Model must be instance of RawModel";
        }
    }

    private callAjax(objModel : any, type, params)
    {
        this.ajax = new Ajax();
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
        this.ajax.setUrl(
            url
        );
        this.ajax.setParams(
            params
        );
        this.ajax.setMethod(
            objModel.getMethod()
        );
    }

    /**
     *
     */
    private ucfirst(str)
    {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    /**
     *
     */
    private lcfirst(str)
    {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    /**
     *
     */
    public save(model : any)
    {
        this.getContainer()
            .set(
                "transactionModel",
                model
            );

        this.getContainer()
            .set(
                "transactionObjectModel",
                model
            );

        this.getContainer()
            .set(
                "transactionType",
                "save"
            );

        if (model instanceof AjaxModel) {
            this.ajax = new Ajax();
            var modelName = model.getClassName();

            switch (model.state) {
                case UnitOfWork.NEW:
                        var url = model.getInsertUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(modelName) +
                            "Insert";
                        }
                        this.ajax.setUrl(
                            url
                        );
                    break;
                case UnitOfWork.CREATED:
                        var url = model.getUpdateUrl();
                        if (url == null) {
                            url = this.getDi().get("url").get("baseUrl") +
                            this.lcfirst(modelName) +
                            "Update";
                        }
                        this.ajax.setUrl(
                            url
                        );
                    break;
            }

            var reflection = new Reflection();
            var attrsAsString = JSON.stringify(
                reflection.getAtttributeAsObjects(model)
            );
            var objParams = {};
            objParams[modelName] = attrsAsString;
            this.ajax.setParams(objParams);
            this.ajax.setMethod(
                model.getMethod()
            );

        } else if (model instanceof StaticModel) {
            switch (model.state) {
                case UnitOfWork.NEW:
                        let tempData = model.getData();
                    break;
                case UnitOfWork.CREATED:

                    break;
            }
        }

        return this;
    }

    /**
     *
     */
    public delete(model : any)
    {
        this.getContainer()
            .set(
                "transactionModel",
                model
            );

        this.getContainer()
            .set(
                "transactionObjectModel",
                model
            );

        this.getContainer()
            .set(
                "transactionType",
                "delete"
            );

        if (model instanceof AjaxModel) {
            this.ajax = new Ajax();
            var modelName = model.getClassName();

            var url = model.getDeleteUrl();
            if (url == null) {
                url = this.getDi().get("url").get("baseUrl") +
                this.lcfirst(modelName) +
                "Delete";
            }
            this.ajax.setUrl(
                url
            );
            var reflection = new Reflection();
            var attrsAsString = JSON.stringify(
                reflection.getAtttributeAsObjects(model)
            );
            var objParams = {};
            objParams[modelName] = attrsAsString;
            this.ajax.setParams(objParams);
            this.ajax.setMethod(
                model.getMethod()
            );

        } else if (model instanceof StaticModel) {
            switch (model.state) {
                case UnitOfWork.NEW:
                        let tempData = model.getData();
                    break;
                case UnitOfWork.CREATED:

                    break;
            }
        }

        return this;
    }

    /**
     *
     */
    public response(fn : Function)
    {
        var model  = this.getContainer()
            .get("transactionModel");

        var objModel  = this.getContainer()
            .get("transactionObjModel");

        var type : any = this.getContainer()
            .get("transactionType");

        if (type == "save" || type == "delete") {
            this.ajax.response(function (response) {
                return fn(this.setResponse(
                    response,
                    objModel,
                    type,
                    model
                ));

            }.bind(this));

            this.ajax.send();

        } else {

            if (type == "find" || type == "findOne" || type == "count") {
                var params = this.getContainer()
                    .get("transactionParams");
            }

            this.checkModel(
                fn,
                type,
                model,
                objModel,
                params
            );
        }

        return this;
    }

    /**
     *
     */
    public checkModel(fn, type, model, objModel, params)
    {
        if (objModel instanceof AjaxModelPersistent) {
            let data = objModel.getData();
            if (objModel.getAjaxInit() == null) {
                this.setResponseAjax(
                    fn,
                    type,
                    model,
                    objModel,
                    params
                );
            } else {
                this.setResponseStatic(
                    fn,
                    objModel,
                    type,
                    model,
                    params
                );
            }
        } else {
            if (objModel instanceof AjaxModel) {
                this.setResponseAjax(
                    fn,
                    type,
                    model,
                    objModel,
                    params
                );
            } else {
                if (objModel instanceof StaticModel) {
                    this.setResponseStatic(
                        fn,
                        objModel,
                        type,
                        model,
                        params
                    );
                }
            }
        }
    }

    /**
     *
     */
    private setResponseAjax(fn, type, model, objModel, params)
    {
        this.ajax.response(function (response) {
            return fn(this.setResponse(
                response,
                objModel,
                type,
                model,
                params
            ));
        }.bind(this));
        this.ajax.send();
    }

    /**
     *
     */
    public setResponseStatic(fn, objModel, type, model, params)
    {
        fn(this.setResponse(
            objModel.getData(),
            objModel,
            type,
            model,
            params
        ));
    }

    /**
     *
     */
    private setResponse(data, objModel, type, model, params)
    {
        let resultSet : any = new Array();
        switch (type) {
            case "count":
            case "findOne":
                    resultSet = this.getResultSet(
                        data,
                        params,
                        model,
                        objModel
                    );
                    if (resultSet != false) {
                        resultSet = resultSet[0];
                    }
                break;
            case "find":
                    resultSet = this.getResultSet(
                        data,
                        params,
                        model,
                        objModel
                    );
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
    private getResultSet(response, params, model, objModel)
    {
        let resultSet : any = new Array();
        let hydrator = new Hydrator;

        let filters  = new Filter;
        filters.buildCondition(params);

        var data = new Array();
        if (objModel instanceof AjaxModelPersistent) {
            if (objModel.getAjaxInit() == null) {
                objModel.setAjaxInit(true);
                objModel.setData(response);
            }
            data = filters.getMultipleRowValues(
                response,
                false
            );
        } else if (objModel instanceof AjaxModel) {
            data = filters.getMultipleRowValues(
                response,
                false
            );
        } else {
            data = filters.getMultipleRowValues(
                response
            );
        }

        var i = 0;
        for (let key in data) {

            let newModel = hydrator.hydrate(
                model,
                data[key]
            );

            if (newModel instanceof StaticModel) {
                newModel.setIndex(i);
            }

            resultSet.push(
                newModel
            );
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
    public flush()
    {
        return false;
    }

    /**
     *
     */
    public reset()
    {
        return false;
    }

    /**
     *
     */
    public group()
    {
        return {};
    }

    /**
     *
     */
    public distinct()
    {
        return {};
    }

    /**
     *
     */
    public purge()
    {
        return false;
    }

    /**
     *
     */
    public forget()
    {
        return false;
    }

    public checksum(obj)
    {
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
    public getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    public setDi(di)
    {
        this.di = di;
    }

    /**
     * 
     */
    public getDi()
    {
        return this.di;
    }
}

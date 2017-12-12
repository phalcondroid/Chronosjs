///<reference path="./Environment/Scope.ts"/>
///<reference path="./Environment/Config.ts"/>
///<reference path="./Helper/ArrayHelper.ts"/>
///<reference path="./Service/Container.ts"/>
var Northwind;
///<reference path="./Environment/Scope.ts"/>
///<reference path="./Environment/Config.ts"/>
///<reference path="./Helper/ArrayHelper.ts"/>
///<reference path="./Service/Container.ts"/>
(function (Northwind) {
    class Application {
        /**
         *
         */
        constructor() {
            /**
             *
             */
            this.config = {};
            /**
             *
             */
            this.try = 0;
            /**
             *
             */
            this.env = Northwind.Environment.Scope.LOCAL;
            /**
             *
             */
            this.catchErrors = function () { };
            /**
             *
             */
            this.domManager = new Northwind.Html.Dom;
            /**
             *
             */
            this.restricted = new Array;
            /**
             *
             */
            this.globals = new Array;
            /**
             *
             */
            this.controllers = false;
            this.restricted = [
                "constructor",
                "initialize",
                "getById",
                "getByTag",
                "getByClass",
                "getDi",
                "hasKey",
                "setPersistent",
                "getPersistent",
                "get",
                "set",
                "setDi",
                "getUrl",
                "setUrl",
                "getAjax",
                "setAjax",
                "getDom",
                "setDom",
                "setEm",
                "getEm",
                "setEntityManager",
                "getEntityManager",
                "setContainer",
                "getContainer",
                "setTag",
                "getTag",
                "setEvent",
                "getEvent",
                "setGlobals",
                "getGlobals"
            ];
            new Northwind.Service.Allocator();
            window.onbeforeunload = function () {
                sessionStorage.clear();
            };
        }
        /**
         *
         */
        setScope(env) {
            this.env = env;
        }
        /**
         *
         */
        setControllers(controller = false) {
            this.controllers = controller;
        }
        /**
         *
         */
        setConfig(config) {
            this.config = config.getConfig(this.env);
        }
        /**
         *
         */
        getConfig() {
            return this.config;
        }
        /**
         *
         */
        setGlobals(globals) {
            this.globals = globals;
            return this;
        }
        /**
         *
         */
        getGlobals() {
            return this.globals;
        }
        /**
         *
         */
        resolveConfig() {
            this.addCharset();
            let positionArray = new Array();
            let configData = this.config;
            for (let key in configData) {
                switch (key) {
                    case "urls":
                        this.resolveUrl(configData[key]);
                        break;
                    case "services":
                        this.resolveServices(configData[key]);
                        break;
                }
            }
            if (configData.hasOwnProperty("controllers")) {
                this.resolveControllers(configData["controllers"]);
            }
            else {
                throw "Config must have controllers item attached";
            }
        }
        addCharset() {
            let header = this.domManager.getByTag("head");
            header.append(new Northwind.Tag.Meta().attr({
                "charset": "utf-8"
            }));
        }
        /**
         *
         */
        resolveUrl(urls) {
            let url = new Northwind.Url.Url();
            if (Array.isArray(urls)) {
                for (let key in urls) {
                    if (typeof urls[key] == "string") {
                        url.set(key, urls[key]);
                    }
                    else {
                        throw "Url must be string : " + urls[key];
                    }
                }
            }
            else if (typeof url == "object") {
                for (let keyUrlFor in urls) {
                    url.set(keyUrlFor, urls[keyUrlFor]);
                }
            }
            else {
                throw "Url data unrecognized";
            }
            Northwind.Service.DependencyInjector.get().set("url", url);
        }
        /**
         *
         */
        resolveControllers(controllers) {
            if (controllers.length == 0) {
                throw "You must load your controllers";
            }
            if (Array.isArray(controllers)) {
                let i = 1;
                for (let key in controllers) {
                    if (typeof controllers[key] != "undefined") {
                        if (this.controllers == false) {
                            let temp = new controllers[key];
                            this.setControllerInstance(temp);
                        }
                        else {
                            if (Array.isArray(this.controllers)) {
                                for (let item of this.controllers) {
                                    let temp = new controllers[key];
                                    if (item == temp.getClassName()) {
                                        this.setControllerInstance(temp);
                                    }
                                }
                            }
                            else if (typeof this.controllers == "string") {
                                let temp = new controllers[key];
                                if (temp.getClassName() == this.controllers) {
                                    this.setControllerInstance(temp);
                                }
                            }
                        }
                        i++;
                    }
                    else {
                        throw "Config => Controller => 'name' must be initialized with Northwind.Mvc.Controller class";
                    }
                }
            }
            else {
                throw "Config => controllers must be array";
            }
        }
        setControllerInstance(temp) {
            if (temp instanceof Northwind.Mvc.Controller) {
                console.log(temp.getClassName(), Northwind.Service.DependencyInjector);
                temp.setGlobals(this.getGlobals());
                temp.initialize();
                this.resolvePropertiesController(temp);
            }
            else {
                throw "Controller #" + temp.getClassName() + " must be extend from View.Controller class";
            }
        }
        /**
         *
         */
        resolvePropertiesController(controller) {
            for (let key in controller) {
                switch (typeof controller[key]) {
                    case "function":
                        if (!Northwind.Helper.ArrayHelper.inArray(this.restricted, key)) {
                            let component = this.domManager.getById(key);
                            if (component != false) {
                                component.setDi(controller.getDi());
                                if (component) {
                                    controller[key](component);
                                }
                            }
                        }
                        break;
                }
            }
        }
        /**
         *
         */
        resolveServices(service) {
            new service().initialize(Northwind.Service.DependencyInjector.get());
        }
        /**
         *
         */
        catch(fn) {
            this.catchErrors = fn;
            return this;
        }
        /**
         *
         */
        start() {
            try {
                let di = new Northwind.Service.Container;
                this.resolveConfig();
            }
            catch (e) {
                this.catchErrors(e);
            }
        }
    }
    Northwind.Application = Application;
})(Northwind || (Northwind = {}));

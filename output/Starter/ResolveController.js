System.register(["../Di/Service", "./Restricted", "../Mvc/Controller", "../Helper/ArrayHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, Restricted_1, Controller_1, ArrayHelper_1, ResolveController;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (Restricted_1_1) {
                Restricted_1 = Restricted_1_1;
            },
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            },
            function (ArrayHelper_1_1) {
                ArrayHelper_1 = ArrayHelper_1_1;
            }
        ],
        execute: function () {
            ResolveController = class ResolveController {
                /**
                 *
                 * @param controllers
                 */
                constructor(controllers) {
                    this.controllers = controllers;
                    this.di = new Service_1.Service;
                }
                /**
                 *
                 * @param controller
                 * @param key
                 */
                resolveProperties(controller) {
                    for (let key in controller) {
                        switch (typeof controller[key]) {
                            case "function":
                                if (!ArrayHelper_1.ArrayHelper.inArray(Restricted_1.Restricted.get(), key)) {
                                    let component = this.di.get("dom").getById(key);
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
                resolve() {
                    if (Array.isArray(this.controllers)) {
                        for (let key in this.controllers) {
                            let instance = new this.controllers[key];
                            if (instance instanceof Controller_1.Controller) {
                                this.resolveProperties(instance);
                            }
                        }
                    }
                }
            };
            exports_1("ResolveController", ResolveController);
        }
    };
});

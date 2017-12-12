System.register(["./Service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, Injectable;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            Injectable = class Injectable {
                /**
                 *
                 */
                getValidator() {
                    let validator = {
                        get: function (target, name) {
                            switch (name) {
                                case "em":
                                    return this.getDi().get("em");
                                case "ajax":
                                    return this.getDi().get("ajax");
                                case "dom":
                                    return this.getDi().get("dom");
                                case "eventManager":
                                    return this.getDi().get("eventManager");
                                case "uuid":
                                    return this.getDi().get("uuid");
                                case "url":
                                    return this.getDi().get("url");
                            }
                        }
                    };
                }
                getDi() {
                    return new Service_1.Service();
                }
                /**
                 *
                 * @param obj
                 */
                inject(obj) {
                    return new Proxy(obj, this.getValidator());
                }
            };
            exports_1("Injectable", Injectable);
        }
    };
});

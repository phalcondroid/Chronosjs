System.register(["./UnitOfWork", "../Mvc/Model/RawModel"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UnitOfWork_1, RawModel_1, Hydrator;
    return {
        setters: [
            function (UnitOfWork_1_1) {
                UnitOfWork_1 = UnitOfWork_1_1;
            },
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            }
        ],
        execute: function () {
            Hydrator = class Hydrator {
                constructor() {
                }
                hydrate(model, data) {
                    var newModel = new model();
                    newModel.state = UnitOfWork_1.UnitOfWork.CREATED;
                    for (let key in data) {
                        switch (typeof newModel[key]) {
                            case "function":
                                var auxPropNested = new newModel[key];
                                if (auxPropNested instanceof RawModel_1.RawModel) {
                                    newModel[key] = this.hydrate(newModel[key], data[key]);
                                }
                                else {
                                    newModel[key] = data[key];
                                }
                                break;
                            default:
                                var dataArray = new Array();
                                if (Array.isArray(newModel[key])) {
                                    switch (typeof newModel[key][0]) {
                                        case "function":
                                            if (typeof data[key].length != "undefined") {
                                                if (data[key].length > 0) {
                                                    var auxSubModel = new newModel[key][0];
                                                    var arrayData = new Array();
                                                    if (auxSubModel instanceof RawModel_1.RawModel) {
                                                        for (let subModelKey in data[key]) {
                                                            arrayData.push(this.hydrate(newModel[key][0], data[key][subModelKey]));
                                                        }
                                                        newModel[key] = arrayData;
                                                    }
                                                }
                                            }
                                            break;
                                        default:
                                            newModel[key] = data[key];
                                            break;
                                    }
                                }
                                else {
                                    newModel[key] = data[key];
                                }
                                break;
                        }
                        if (Array.isArray(newModel[key])) {
                            if (typeof newModel[key][0] == "function") {
                                newModel[key] = new Array();
                            }
                        }
                    }
                    return newModel;
                }
            };
            exports_1("Hydrator", Hydrator);
        }
    };
});

System.register(["./Starter", "../Di/Service", "./Injector/InitializeComponents"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Starter_1, Service_1, InitializeComponents_1, Chronos;
    return {
        setters: [
            function (Starter_1_1) {
                Starter_1 = Starter_1_1;
            },
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (InitializeComponents_1_1) {
                InitializeComponents_1 = InitializeComponents_1_1;
            }
        ],
        execute: function () {
            (function (Chronos) {
                class Application {
                    /**
                     *
                     */
                    constructor(config) {
                        this.config = config;
                        this.fetchDi();
                        window.onbeforeunload = function () {
                            sessionStorage.clear();
                        };
                    }
                    /**
                     *
                     */
                    fetchDi() {
                        let injector = new InitializeComponents_1.InitializeComponents(new Service_1.Service);
                        injector.inject();
                    }
                    /**
                     *
                     */
                    start() {
                        let starter = new Starter_1.Starter;
                        starter.setConfig(this.config);
                        starter.start();
                    }
                }
                Chronos.Application = Application;
            })(Chronos || (Chronos = {}));
            exports_1("Chronos", Chronos);
        }
    };
});

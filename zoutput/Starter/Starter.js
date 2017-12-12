System.register(["../Environment/Scope", "./ResolveController", "./ResolvePaths"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Scope_1, ResolveController_1, ResolvePaths_1, Starter;
    return {
        setters: [
            function (Scope_1_1) {
                Scope_1 = Scope_1_1;
            },
            function (ResolveController_1_1) {
                ResolveController_1 = ResolveController_1_1;
            },
            function (ResolvePaths_1_1) {
                ResolvePaths_1 = ResolvePaths_1_1;
            }
        ],
        execute: function () {
            Starter = class Starter {
                /**
                 *
                 */
                constructor() {
                    /**
                     *
                     */
                    this.scope = Scope_1.Scope.DEV;
                }
                /**
                 *
                 * @param scope
                 */
                setScope(scope) {
                    this.scope = scope;
                }
                /**
                 *
                 */
                getScope() {
                    return this.scope;
                }
                /**
                 *
                 */
                setControllers(controllers) {
                    this.controllers = controllers;
                }
                /**
                 *
                 */
                getControllers() {
                    return this.controllers;
                }
                /**
                 *
                 * @param config
                 */
                setConfig(config) {
                    this.config = config;
                }
                /**
                 *
                 */
                getConfig() {
                    return this.config;
                }
                /**
                 *
                 * @param data
                 */
                setData(data) {
                    this.data = data;
                }
                /**
                 *
                 */
                getData() {
                    return this.data;
                }
                /**
                 *
                 */
                resolvePath() {
                    let config = this.getConfig();
                    if (typeof config["url"] == "undefined") {
                        throw "Config: item url must be mandatory.";
                    }
                    new ResolvePaths_1.ResolvePaths(config["paths"]).resolve();
                }
                /**
                 *
                 */
                resolveService() {
                    let config = this.getConfig();
                    if (typeof config["service"] != "undefined") {
                        new ResolveController_1.ResolveController(config["service"]).resolve();
                    }
                }
                /**
                 *
                 */
                resolveControllers() {
                    let config = this.getConfig();
                    if (typeof config["controllers"] == "undefined") {
                        throw "Config: item controllers must be mandatory.";
                    }
                    new ResolveController_1.ResolveController(config["controllers"]).resolve();
                }
                /**
                 *
                 */
                start() {
                    this.resolvePath();
                    this.resolveService();
                    this.resolveControllers();
                }
            };
            exports_1("Starter", Starter);
        }
    };
});

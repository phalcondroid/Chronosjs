System.register(["./Scope"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Scope_1, Config;
    return {
        setters: [
            function (Scope_1_1) {
                Scope_1 = Scope_1_1;
            }
        ],
        execute: function () {
            Config = class Config {
                constructor() {
                    /**
                     *
                     */
                    this.config = {};
                }
                /**
                 * Set general config and environment
                 *
                 * @param Object config
                 * @param Number env = Scope.Local
                 */
                setConfig(config, env = Scope_1.Scope.LOCAL) {
                    this.config[env] = config;
                }
                /**
                 * Get config was assigned
                 *
                 * @param Number env = Garlic.Environment.Scope.Local
                 * @return Object
                 */
                getConfig(env = Scope_1.Scope.LOCAL) {
                    return this.config[env];
                }
            };
            exports_1("Config", Config);
        }
    };
});

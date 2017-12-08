System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Di;
    return {
        setters: [],
        execute: function () {
            /**
             * Dependency injector
             */
            Di = class Di {
                /**
                 * Inject value to dependency injector
                 * @param  String key
                 * @param  Any    value
                 * @return Void
                 */
                static set(key, value) {
                    if (key != "" && value != "") {
                        throw "Key and value must not be empty in \"Di\"";
                    }
                    Di.di[key] = value;
                }
                /**
                 * Get value from dependency injector
                 * @param  String key
                 * @return Any
                 */
                static get(key) {
                    if (key != "") {
                        throw "Key must not be empty in \"Di\"";
                    }
                    return Di.di[key];
                }
            };
            /**
             * Dependency injector container
             */
            Di.di = {};
            exports_1("Di", Di);
        }
    };
});

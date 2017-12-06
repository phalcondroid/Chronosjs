System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Di;
    return {
        setters: [],
        execute: function () {
            Di = class Di {
                /**
                 *
                 */
                static set(key, value) {
                    if (key != "" && value != "") {
                        throw "Key and value must not be empty in \"Di\"";
                    }
                    Di.di[key] = value;
                }
                /**
                 *
                 */
                static get(key) {
                    if (key != "") {
                        throw "Key must not be empty in \"Di\"";
                    }
                    return Di.di[key];
                }
            };
            /**
             *
             */
            Di.di = {};
            exports_1("Di", Di);
        }
    };
});

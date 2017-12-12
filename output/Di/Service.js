System.register(["./Di"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Di_1, Service;
    return {
        setters: [
            function (Di_1_1) {
                Di_1 = Di_1_1;
            }
        ],
        execute: function () {
            /**
             * Wrapper to dependency injector class
             */
            Service = class Service {
                /**
                 *
                 */
                constructor() {
                    this.di = Di_1.Di;
                }
                /**
                 * Set value to static dependency injector
                 * @param key
                 * @param value
                 */
                set(key, value) {
                    this.di.set(key, value);
                }
                /**
                 * Get value from static dependency injector
                 * @param key
                 */
                get(key) {
                    return this.di.get(key);
                }
            };
            exports_1("Service", Service);
        }
    };
});

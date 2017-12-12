System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorage;
    return {
        setters: [],
        execute: function () {
            /**
             * Wrapper to local storage
             */
            LocalStorage = class LocalStorage {
                constructor() {
                }
                /**
                 * Set item in local storage
                 * @param key string
                 * @param value string
                 * @returns void
                 */
                set(key, value) {
                    localStorage.setItem(key, value);
                    return;
                }
                /**
                 * Get item from local storage
                 * @param key string
                 * @returns any
                 */
                get(key) {
                    return localStorage.getItem(key);
                }
            };
            exports_1("LocalStorage", LocalStorage);
        }
    };
});

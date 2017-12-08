System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SessionStorage;
    return {
        setters: [],
        execute: function () {
            /**
             * wrapper to session storage
             */
            SessionStorage = class SessionStorage {
                constructor() {
                }
                /**
                 * Set item in session storage
                 * @param key string
                 * @param value string
                 * @returns void
                 */
                set(key, value) {
                    sessionStorage.setItem(key, value);
                    return;
                }
                /**
                 * Get item from session storage
                 * @param key string
                 * @returns any
                 */
                get(key) {
                    return sessionStorage.getItem(key);
                }
            };
            exports_1("SessionStorage", SessionStorage);
        }
    };
});

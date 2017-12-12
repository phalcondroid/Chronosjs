System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Container;
    return {
        setters: [],
        execute: function () {
            Container = class Container {
                constructor() {
                }
                /**
                  * Set value to container
                 * @param key
                 * @param value
                 */
                set(key, value) {
                    this.di.set(key, value);
                }
                /**
                 * Get value from container
                 * @param key
                 */
                get(key) {
                    return this.di.get(key);
                }
            };
            exports_1("Container", Container);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ArrayHelper;
    return {
        setters: [],
        execute: function () {
            ArrayHelper = class ArrayHelper {
                constructor() {
                }
                static inArray(container, element) {
                    for (var key in container) {
                        if (container[key] == element) {
                            return true;
                        }
                    }
                    return false;
                }
            };
            exports_1("ArrayHelper", ArrayHelper);
        }
    };
});

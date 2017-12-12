System.register(["../Di/Service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, ResolvePaths;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            ResolvePaths = class ResolvePaths {
                /**
                 *
                 * @param paths
                 */
                constructor(paths) {
                    this.paths = paths;
                    this.di = new Service_1.Service;
                }
                /**
                 *
                 */
                resolve() {
                    for (let key in this.paths) {
                        this.di.get("url").set(key, this.paths[key]);
                    }
                }
            };
            exports_1("ResolvePaths", ResolvePaths);
        }
    };
});

System.register(["../Di/Service"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, ResolveService;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            }
        ],
        execute: function () {
            ResolveService = class ResolveService {
                /**
                 *
                 */
                constructor(service = false) {
                    if (service == false) {
                        throw "Config : Service must be a json object";
                    }
                    this.service = new service(new Service_1.Service);
                }
                /**
                 *
                 */
                resolve() {
                }
            };
            exports_1("ResolveService", ResolveService);
        }
    };
});

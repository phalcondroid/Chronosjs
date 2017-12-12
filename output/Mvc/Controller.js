System.register(["../Di/Service", "../Di/Injectable"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Service_1, Injectable_1, Controller;
    return {
        setters: [
            function (Service_1_1) {
                Service_1 = Service_1_1;
            },
            function (Injectable_1_1) {
                Injectable_1 = Injectable_1_1;
            }
        ],
        execute: function () {
            Controller = class Controller {
                /**
                 *
                 */
                constructor(args = {}) {
                    this.di = new Service_1.Service;
                    let injectable = new Injectable_1.Injectable();
                    return injectable.inject(this);
                }
                /**
                 *
                 */
                getDi() {
                    return this.di;
                }
                /**
                 *
                 * @param di
                 */
                setDi(di) {
                    this.di = di;
                }
            };
            exports_1("Controller", Controller);
        }
    };
});

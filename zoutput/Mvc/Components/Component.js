System.register(["../Controller"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Controller_1, Component;
    return {
        setters: [
            function (Controller_1_1) {
                Controller_1 = Controller_1_1;
            }
        ],
        execute: function () {
            Component = class Component extends Controller_1.Controller {
                constructor(context = false) {
                    super();
                }
            };
            exports_1("Component", Component);
        }
    };
});

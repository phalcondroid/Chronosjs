System.register(["../../Mvc/View/Html/Dom/CssManager", "../../Mvc/View/Html/Dom/DomManager", "../../Mvc/View/Html/Dom/EventManager", "../../Mvc/View/Html/Dom/ParentManager", "../../Mvc/View/Html/Dom/ElementManager", "../../Network/Ajax"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CssManager_1, DomManager_1, EventManager_1, ParentManager_1, ElementManager_1, Ajax_1, InjectorComponents;
    return {
        setters: [
            function (CssManager_1_1) {
                CssManager_1 = CssManager_1_1;
            },
            function (DomManager_1_1) {
                DomManager_1 = DomManager_1_1;
            },
            function (EventManager_1_1) {
                EventManager_1 = EventManager_1_1;
            },
            function (ParentManager_1_1) {
                ParentManager_1 = ParentManager_1_1;
            },
            function (ElementManager_1_1) {
                ElementManager_1 = ElementManager_1_1;
            },
            function (Ajax_1_1) {
                Ajax_1 = Ajax_1_1;
            }
        ],
        execute: function () {
            InjectorComponents = class InjectorComponents {
                /**
                 *
                 * @param di
                 */
                constructor(di) {
                    this.di = di;
                }
                /**
                 *
                 */
                inject() {
                    this.di.set("Chronos.Dom.CssManager", new CssManager_1.CssManager);
                    this.di.set("Chronos.Dom.ParentManager", new ParentManager_1.ParentManager);
                    this.di.set("Chronos.Dom.ElementManager", new ElementManager_1.ElementManager);
                    this.di.set("dom", new DomManager_1.DomManager);
                    this.di.set("eventManager", new EventManager_1.EventManager);
                    this.di.set("ajax", new Ajax_1.Ajax);
                    ;
                }
            };
            exports_1("InjectorComponents", InjectorComponents);
        }
    };
});

System.register(["./Transaction"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Transaction_1, Group;
    return {
        setters: [
            function (Transaction_1_1) {
                Transaction_1 = Transaction_1_1;
            }
        ],
        execute: function () {
            Group = class Group extends Transaction_1.Transaction {
                constructor() {
                    super();
                }
                get() {
                }
            };
            exports_1("Group", Group);
        }
    };
});

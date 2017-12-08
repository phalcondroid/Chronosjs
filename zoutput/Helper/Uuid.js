System.register(["./MathHelper"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MathHelper_1, Uuid;
    return {
        setters: [
            function (MathHelper_1_1) {
                MathHelper_1 = MathHelper_1_1;
            }
        ],
        execute: function () {
            Uuid = class Uuid {
                constructor() {
                }
                static get() {
                    return MathHelper_1.MathHelper.getS4() + MathHelper_1.MathHelper.getS4() + '-' +
                        MathHelper_1.MathHelper.getS4() + '-' + MathHelper_1.MathHelper.getS4() + '-' +
                        MathHelper_1.MathHelper.getS4() + '-' + MathHelper_1.MathHelper.getS4() +
                        MathHelper_1.MathHelper.getS4() + MathHelper_1.MathHelper.getS4();
                }
            };
            exports_1("Uuid", Uuid);
        }
    };
});

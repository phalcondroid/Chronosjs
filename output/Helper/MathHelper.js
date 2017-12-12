System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MathHelper;
    return {
        setters: [],
        execute: function () {
            MathHelper = class MathHelper {
                constructor() {
                }
                static getRandom(init, last) {
                    return Math.floor((Math.random() * last) + init);
                }
                static getUUID() {
                    return this.getS4() + this.getS4() + '-' +
                        this.getS4() + '-' + this.getS4() + '-' +
                        this.getS4() + '-' + this.getS4() +
                        this.getS4() + this.getS4();
                }
                static getS4() {
                    return Math.floor((1 + Math.random()) * 0x10000)
                        .toString(16)
                        .substring(1);
                }
            };
            exports_1("MathHelper", MathHelper);
        }
    };
});

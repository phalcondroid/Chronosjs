System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UnitOfWork;
    return {
        setters: [],
        execute: function () {
            UnitOfWork = class UnitOfWork {
                constructor() {
                }
            };
            UnitOfWork.NEW = 1;
            UnitOfWork.CREATED = 2;
            UnitOfWork.DELETED = 3;
            exports_1("UnitOfWork", UnitOfWork);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Operators;
    return {
        setters: [],
        execute: function () {
            Operators = class Operators {
            };
            Operators.OR = "$or";
            Operators.AND = "$and";
            Operators.SORT = "$sort";
            Operators.IS_NOT = "$isNot";
            Operators.LIMIT = "$limit";
            Operators.COLUMNS = "$columns";
            Operators.CONDITIONAL = "$conditions";
            exports_1("Operators", Operators);
        }
    };
});

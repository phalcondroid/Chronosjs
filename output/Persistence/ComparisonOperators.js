System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComparisonOperators;
    return {
        setters: [],
        execute: function () {
            ComparisonOperators = class ComparisonOperators {
            };
            ComparisonOperators.AND = "&&";
            ComparisonOperators.OR = "||";
            ComparisonOperators.EQUAL = "==";
            ComparisonOperators.DIFFERENT = "!=";
            exports_1("ComparisonOperators", ComparisonOperators);
        }
    };
});

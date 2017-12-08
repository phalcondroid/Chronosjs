System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DatamapperOperators;
    return {
        setters: [],
        execute: function () {
            DatamapperOperators = class DatamapperOperators {
            };
            DatamapperOperators.OR = "$or";
            DatamapperOperators.AND = "$and";
            DatamapperOperators.SORT = "$sort";
            DatamapperOperators.IS_NOT = "$isNot";
            DatamapperOperators.LIMIT = "$limit";
            DatamapperOperators.COLUMNS = "$columns";
            DatamapperOperators.CONDITIONAL = "$conditions";
            exports_1("DatamapperOperators", DatamapperOperators);
        }
    };
});

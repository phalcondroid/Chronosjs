System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DataType;
    return {
        setters: [],
        execute: function () {
            DataType = class DataType {
                /**
                 *
                 */
                static getValueByType(value) {
                    var tyof = typeof value;
                    switch (tyof) {
                        case DataType.STRING_TYPE:
                            value = "\"" + value + "\"";
                            break;
                    }
                    return value;
                }
            };
            DataType.BOOLEAN = 1;
            DataType.INTEGER = 2;
            DataType.STRING = 3;
            DataType.OBJECT = 4;
            DataType.ARRAY = 5;
            DataType.CLASS = 6;
            DataType.BOOLEAN_TYPE = "boolean";
            DataType.INTEGER_TYPE = "number";
            DataType.STRING_TYPE = "string";
            DataType.OBJECT_TYPE = "object";
            exports_1("DataType", DataType);
        }
    };
});

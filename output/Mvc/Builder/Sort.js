System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Sort;
    return {
        setters: [],
        execute: function () {
            Sort = class Sort {
                static sortByField(data, field) {
                    var arr = [];
                    for (var prop in data) {
                        if (data.hasOwnProperty(prop)) {
                            var obj = {};
                            obj[prop] = data[prop];
                            obj.tempSortName = data[prop][field].toLowerCase();
                            arr.push(obj);
                        }
                    }
                    arr.sort(function (a, b) {
                        var at = a.tempSortName, bt = b.tempSortName;
                        return at > bt ? 1 : (at < bt ? -1 : 0);
                    });
                    var result = [];
                    for (var i = 0, l = arr.length; i < l; i++) {
                        var obj = arr[i];
                        delete obj.tempSortName;
                        for (var prop in obj) {
                            if (obj.hasOwnProperty(prop)) {
                                var id = prop;
                            }
                        }
                        var item = obj[id];
                        result.push(item);
                    }
                    return result;
                }
            };
            Sort.ASC = 1;
            Sort.DESC = -1;
            exports_1("Sort", Sort);
        }
    };
});

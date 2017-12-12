System.register(["../Di/Container"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Container_1, Url;
    return {
        setters: [
            function (Container_1_1) {
                Container_1 = Container_1_1;
            }
        ],
        execute: function () {
            Url = class Url extends Container_1.Container {
                /**
                 *
                 * @param url
                 */
                getQuery(url = false) {
                    if (url == false) {
                        url = document.URL;
                    }
                    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
                    var obj = {};
                    if (queryString) {
                        queryString = queryString.split('#')[0];
                        var arr = queryString.split('&');
                        for (var i = 0; i < arr.length; i++) {
                            var a = arr[i].split('=');
                            var paramNum = undefined;
                            var paramName = a[0].replace(/\[\d*\]/, function (v) {
                                paramNum = v.slice(1, -1);
                                return '';
                            });
                            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
                            if (obj[paramName]) {
                                if (typeof obj[paramName] === 'string') {
                                    obj[paramName] = [obj[paramName]];
                                }
                                if (typeof paramNum === 'undefined') {
                                    obj[paramName].push(paramValue);
                                }
                                else {
                                    obj[paramName][paramNum] = paramValue;
                                }
                            }
                            else {
                                obj[paramName] = paramValue;
                            }
                        }
                    }
                    return obj;
                }
            };
            exports_1("Url", Url);
        }
    };
});

System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var StringHelper;
    return {
        setters: [],
        execute: function () {
            StringHelper = class StringHelper {
                constructor() {
                }
                /**
                 * [sanitizeString description]
                 * @param  {string} str [description]
                 * @return {[type]}     [description]
                 */
                static sanitizeString(str) {
                    let idTr = str.replace(/[`~!@#$%^&*()_|+\-=?;:"",.<>\{\}\[\]\\\/]/gi, "").toLowerCase();
                    idTr = idTr.toString().replace(/\s/g, "");
                    return idTr;
                }
                /**
                 * [capitalize description]
                 * @param  {[type]} str [description]
                 * @return {[type]}     [description]
                 */
                static capitalize(str) {
                    return str.charAt(0).toUpperCase() + str.slice(1);
                }
            };
            exports_1("StringHelper", StringHelper);
        }
    };
});

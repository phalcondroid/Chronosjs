System.register(["../../Helper/Uuid"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Uuid_1, RawModel;
    return {
        setters: [
            function (Uuid_1_1) {
                Uuid_1 = Uuid_1_1;
            }
        ],
        execute: function () {
            RawModel = class RawModel {
                constructor() {
                    this.state = 1;
                    this.identify = Uuid_1.Uuid.get();
                }
                /**
                 *
                 */
                initialize() {
                }
                /**
                 *
                 */
                beforeInsert() {
                }
                /**
                 *
                 */
                beforeFind() {
                }
                /**
                 *
                 */
                beforeUpdate() {
                }
                /**
                 *
                 */
                beforeDelete() {
                }
                /**
                 * [getClassName description]
                 * @return {[type]} [description]
                 */
                getClassName() {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(this["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 *
                 */
                getIdentify() {
                    return this.identify;
                }
            };
            exports_1("RawModel", RawModel);
        }
    };
});

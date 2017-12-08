System.register(["./RawModel", "../../Di/SessionStorage"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RawModel_1, SessionStorage_1, StaticModel;
    return {
        setters: [
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            },
            function (SessionStorage_1_1) {
                SessionStorage_1 = SessionStorage_1_1;
            }
        ],
        execute: function () {
            StaticModel = class StaticModel extends RawModel_1.RawModel {
                /**
                 *
                 */
                constructor(di) {
                    super();
                    this.storage = new SessionStorage_1.SessionStorage;
                    this.initialize();
                }
                /**
                 *
                 */
                setData(data) {
                    this.storage.set("Models_Identify_" + this.getClassName(), JSON.stringify(data));
                }
                /**
                 *
                 */
                getData() {
                    let data = this.storage.get("Models_Identify_" + this.getClassName());
                    return data;
                }
                /**
                 *
                 */
                getObjectData() {
                    return JSON.parse(this.storage.get("Models_Identify_" + this.getClassName()));
                }
                /**
                 *
                 */
                setIndex(index) {
                    this.index = index;
                }
                /**
                 *
                 */
                getIndex() {
                    return this.index;
                }
            };
            exports_1("StaticModel", StaticModel);
        }
    };
});

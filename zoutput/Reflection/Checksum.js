System.register(["./Reflection"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Reflection_1, Checksum;
    return {
        setters: [
            function (Reflection_1_1) {
                Reflection_1 = Reflection_1_1;
            }
        ],
        execute: function () {
            Checksum = class Checksum {
                /**
                 * Build checksum of any javascript object
                 * @param Object obj
                 */
                constructor(obj) {
                    /**
                     * Object become to string
                     */
                    this.stringObject = "";
                    let reflection = new Reflection_1.Reflection();
                    this.stringObject = reflection.read(obj);
                }
                /**
                 * Get base 64 from string
                 * @param String str
                 */
                utf8ToBase64(str) {
                    return window.btoa(encodeURIComponent(str));
                }
                /**
                 * Get checksum
                 * @return String
                 */
                getChecksum() {
                    return this.utf8ToBase64(this.stringObject);
                }
            };
            exports_1("Checksum", Checksum);
        }
    };
});

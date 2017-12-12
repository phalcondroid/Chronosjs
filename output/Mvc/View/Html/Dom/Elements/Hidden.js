System.register(["./Input"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Input_1, Northwind;
    return {
        setters: [
            function (Input_1_1) {
                Input_1 = Input_1_1;
            }
        ],
        execute: function () {
            (function (Northwind) {
                var Tag;
                (function (Tag) {
                    /**
                     * [Input description]
                     * @type {[type]}
                     */
                    class Hidden extends Input_1.Input {
                        constructor(args = {}) {
                            super();
                            this.setHidden();
                        }
                    }
                    Tag.Hidden = Hidden;
                })(Tag = Northwind.Tag || (Northwind.Tag = {}));
            })(Northwind || (Northwind = {}));
        }
    };
});

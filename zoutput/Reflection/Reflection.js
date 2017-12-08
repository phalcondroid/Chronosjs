System.register(["../Mvc/Model/RawModel", "../Mvc/Model/Deny"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var RawModel_1, Deny_1, Reflection;
    return {
        setters: [
            function (RawModel_1_1) {
                RawModel_1 = RawModel_1_1;
            },
            function (Deny_1_1) {
                Deny_1 = Deny_1_1;
            }
        ],
        execute: function () {
            Reflection = class Reflection {
                /**
                 * Make reflection to objects
                 */
                constructor() {
                    this.methods = new Array();
                    this.attributes = new Array();
                    this.deny = {};
                    this.deny = {
                        "insertUrl": true,
                        "deleteUrl": true,
                        "updateUrl": true,
                        "findUrl": true
                    };
                }
                /**
                 * Get object class
                 * @param Object obj
                 */
                getName(obj) {
                    let funcNameRegex = /function (.{1,})\(/;
                    let results = (funcNameRegex).exec(obj["constructor"].toString());
                    return (results && results.length > 1) ? results[1] : "";
                }
                /**
                 * Read and get methods and properties
                 * @param  Object obj
                 * @return String
                 */
                read(obj) {
                    if (typeof obj !== 'object') {
                        console.log('Not an object');
                        return;
                    }
                    let output = '';
                    for (let i in obj) {
                        let propName = i;
                        let propValue = obj[i];
                        let type = (typeof propValue);
                        switch (type) {
                            case 'function':
                                output += ' [method] ' + propName + '\n\n';
                                this.methods.push();
                                break;
                            case 'object':
                                output += '\t[object] ' + propName + ' ' + this.read(propValue) + '\n\n';
                                break;
                            default:
                                output += ' [property] ' + propName + ' ' + propValue + '\n\n';
                                this.attributes.push({
                                    propName: propValue
                                });
                                break;
                        }
                    }
                    return output;
                }
                /**
                 * Return methods and properties as objects
                 * @param  Object obj
                 * @return Object
                 */
                getAtttributeAsObjects(obj) {
                    if (typeof obj !== 'object') {
                        console.log('Not an object');
                        return;
                    }
                    let output = '';
                    let dataAttributes = {};
                    for (let i in obj) {
                        let propName = i;
                        let propValue = obj[i];
                        let type = (typeof propValue);
                        switch (type) {
                            case 'function':
                                break;
                            case 'object':
                                if (propValue instanceof RawModel_1.RawModel) {
                                    dataAttributes[propName] = this.getAtttributeAsObjects(propValue);
                                }
                                else {
                                    if (propValue != null) {
                                        if (Object.keys(propValue).length > 0) {
                                            if (this.checkDataObject(propName)) {
                                                dataAttributes[propName] = propValue;
                                            }
                                        }
                                    }
                                }
                                break;
                            default:
                                var deny = Deny_1.Deny.getDeny();
                                if (deny.indexOf(propName) == -1) {
                                    dataAttributes[propName] = propValue;
                                }
                                break;
                        }
                    }
                    return dataAttributes;
                }
                /**
                 * Check if the key is valid
                 * @param  String key
                 * @return Boolean
                 */
                checkDataObject(key) {
                    if (this.deny[key] != true) {
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                /**
                 * Get class methods
                 * @return Array
                 */
                getMethods() {
                    return this.methods;
                }
                /**
                 * Get properties or class attributes
                 * @return Array
                 */
                getAttributes() {
                    return this.attributes;
                }
            };
            exports_1("Reflection", Reflection);
        }
    };
});

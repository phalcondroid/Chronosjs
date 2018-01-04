import { Service } from "./Service";

export class Injectable
{
    /**
     * 
     */
   private getValidator(resolveProperties : Function = null) : any
    {
        let validator = {
            get: function (target, name) {
                switch (name) {
                    case "em":
                        return this.getDi().get("em");
                    case "ajax":
                        return this.getDi().get("ajax");
                    case "dom":
                        return this.getDi().get("dom");
                    case "eventManager":
                        return this.getDi().get("eventManager");
                    case "uuid":
                        return this.getDi().get("uuid");
                    case "url":
                        return this.getDi().get("url");
                    case "setViewModel":
                        return target[name];
                    case "getViewModel":
                        return target[name];
                    default:
                        return target[name];
                }
            }
        }
        return validator;
    }

    public getDi()
    {
        return new Service();
    }

    /**
     * 
     * @param obj 
     */
    public inject(obj, fn : Function = null)
    {
        return new Proxy(
            obj,
            this.getValidator(fn)
        );
    }
}
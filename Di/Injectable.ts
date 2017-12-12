import { Service } from "./Service";

export class Injectable
{
    /**
     * 
     */
    private getValidator() : any
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
                }
            }
        }
    }

    public getDi()
    {
        return new Service();
    }

    /**
     * 
     * @param obj 
     */
    public inject(obj)
    {
        return new Proxy(
            obj,
            this.getValidator()
        );
    }
}
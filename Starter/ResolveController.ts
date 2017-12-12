
import { Service } from "../Di/Service";
import { Restricted } from "./Restricted";
import { Controller } from "../Mvc/Controller";
import { ArrayHelper } from "../Helper/ArrayHelper";

export class ResolveController
{
    /**
     * 
     */
    private di;

    /**
     * 
     */
    private controllers;

    /**
     * 
     * @param controllers 
     */
    public constructor(controllers)
    {
        this.controllers = controllers;
        this.di = new Service;
    }

    /**
     * 
     * @param controller 
     * @param key 
     */
    private resolveProperties(controller : Controller)
    {
        for (let key in controller) {
            switch (typeof controller[key]) {
                case "function":
                    if (!ArrayHelper.inArray(Restricted.get(), key)) {
                        let component = this.di.get("dom").getById(key);
                        if (component != false) {
                            component.setDi(controller.getDi());
                            if (component) {
                                controller[key](component);
                            }
                        }
                    }
                break;
            }
        }
    }

    /**
     * 
     */
    public resolve()
    {
        if (Array.isArray(this.controllers)) {
            for (let key in this.controllers) {
                let instance = new this.controllers[key];
                if (instance instanceof Controller) {
                    this.resolveProperties(instance);
                }
            }
        }
    }
}
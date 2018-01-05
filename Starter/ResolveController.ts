
import { Di } from "../Di/Di";
import { Restricted } from "./Restricted";
import { Controller } from "../Mvc/Controller";
import { ArrayHelper } from "../Helper/ArrayHelper";
import { ViewModel } from "../Mvc/View/ViewModel";

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
    }

    /**
     * 
     * @param controller 
     * @param key 
     */
    public resolveProperties(controller)
    {
        let methods = Object.getOwnPropertyNames(
            Object.getPrototypeOf(controller)
        );
        for (let key of methods) {
            switch (typeof controller[key]) {
                case "function":
                    if (!ArrayHelper.inArray(Restricted.get(), key)) {
                        let ifExist = document.getElementById(key);
                        if (ifExist != null) {
                            if (typeof ifExist.nodeType != "undefined") {
                                controller[key](new ViewModel);
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
        console.log("resolve", Di);
        if (Array.isArray(this.controllers)) {
            for (let key in this.controllers) {
                let instance = new this.controllers[key](
                    this.resolveProperties
                );
                instance.initialize();
                if (instance instanceof Controller) {
                    this.resolveProperties(instance);
                }
            }
        }
    }
}
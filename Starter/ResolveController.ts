
import { Service } from "../Di/Service";
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
        this.di = new Service;
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
                        controller[key](ViewModel);
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
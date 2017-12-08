
import { CssManager }     from "../../Mvc/View/Html/Dom/CssManager";
import { DomManager }     from "../../Mvc/View/Html/Dom/DomManager";
import { EventManager }   from "../../Mvc/View/Html/Dom/EventManager";
import { ParentManager }  from "../../Mvc/View/Html/Dom/ParentManager";
import { ElementManager } from "../../Mvc/View/Html/Dom/ElementManager";
import { InjectionAwareInterface } from "../../Di/InjectionAwareInterface";
import { Ajax } from "../../Network/Ajax";

export class InjectorComponents
{
    /**
     * 
     */
    private di : InjectionAwareInterface;

    /**
     * 
     * @param di 
     */
    public constructor(di : InjectionAwareInterface)
    {
        this.di = di;
    }

    /**
     * 
     */
    public inject()
    {
        this.di.set(
            "Chronos.Dom.CssManager",
            new CssManager
        );
        this.di.set(
            "Chronos.Dom.ParentManager",
            new ParentManager
        );
        this.di.set(
            "Chronos.Dom.ElementManager",
            new ElementManager
        );
        this.di.set(
            "dom",
            new DomManager
        );
        this.di.set(
            "eventManager",
            new EventManager
        );
        this.di.set(
            "ajax",
            new Ajax;
        );
    }
}
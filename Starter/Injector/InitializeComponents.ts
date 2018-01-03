
import { Url }  from "../../Url/Url";
import { Uuid } from "../../Helper/Uuid";
import { Ajax } from "../../Network/Ajax";
import { EntityManager } from "../../Persistence/EntityManager";
import { CssManager }     from "../../Mvc/View/Html/Dom/CssManager";
import { DomManager }     from "../../Mvc/View/Html/Dom/DomManager";
import { EventManager }   from "../../Mvc/View/Html/Dom/EventManager";
import { ParentManager }  from "../../Mvc/View/Html/Dom/ParentManager";
import { ElementManager } from "../../Mvc/View/Html/Dom/ElementManager";
import { InjectionAwareInterface } from "../../Di/InjectionAwareInterface";

export class InitializeComponents
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
        console.log("Inject->", this.di);
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
            new Ajax
        );
        this.di.set(
            "em",
            new EntityManager
        );
        this.di.set(
            "uuid",
            new Uuid
        );
        this.di.set(
            "url",
            new Url
        );
    }
}
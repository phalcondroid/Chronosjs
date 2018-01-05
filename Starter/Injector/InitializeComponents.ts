
import { Di }   from "../../Di/Di";
import { Url }  from "../../Url/Url";
import { Uuid } from "../../Helper/Uuid";
import { Ajax } from "../../Network/Ajax";
import { EntityManager }  from "../../Persistence/EntityManager";
import { CssManager }     from "../../Mvc/View/Dom/CssManager";
import { DomManager }     from "../../Mvc/View/Dom/DomManager";
import { EventManager }   from "../../Mvc/View/Dom/EventManager";
import { ParentManager }  from "../../Mvc/View/Dom/ParentManager";
import { ElementManager } from "../../Mvc/View/Dom/ElementManager";
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
    public constructor()
    {
        console.log("jajaja inject");
    }

    /**
     * 
     */
    public inject()
    {
        console.log("thing");
        Di.set(
            "Chronos.Dom.CssManager",
            new CssManager
        );
        Di.set(
            "Chronos.Dom.ParentManager",
            new ParentManager
        );
        Di.set(
            "Chronos.Dom.ElementManager",
            new ElementManager
        );
        Di.set(
            "dom",
            new DomManager
        );
        Di.set(
            "eventManager",
            new EventManager
        );
        Di.set(
            "ajax",
            new Ajax
        );
        Di.set(
            "em",
            new EntityManager
        );
        Di.set(
            "uuid",
            new Uuid
        );
        Di.set(
            "url",
            new Url
        );
    }
}
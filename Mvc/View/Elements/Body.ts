import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../Di/Service";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Body extends HtmlElement
{
    public constructor(args : any = {})
    {
        super();
        this.setElement(document.body);
        this.setDi(new Service);
        this.initialize(args);
    }
}
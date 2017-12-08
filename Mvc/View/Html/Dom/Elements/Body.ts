import { HtmlElement } from "../Wrappers/HtmlElement";


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
        this.initialize();
    }
}
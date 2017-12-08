import { Service } from "../../../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Dfn extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DFN"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
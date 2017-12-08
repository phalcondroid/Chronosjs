import { Service } from "../../../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Em extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "EM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
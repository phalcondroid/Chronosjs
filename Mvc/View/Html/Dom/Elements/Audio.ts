import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../../../Di/Service";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Audio extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "DB"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
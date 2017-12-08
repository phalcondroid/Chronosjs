import { Service } from "../../../../../Di/Service"; import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Source extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SOURCE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
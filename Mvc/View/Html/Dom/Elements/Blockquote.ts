import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../../../Di/Service";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Blockquote extends HtmlElement
{
    /**
     *
     */
    public constructor(args? : {})
    {
        super();
        this.setElement(
            document.createElement(
                "BLOCKQUOTE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

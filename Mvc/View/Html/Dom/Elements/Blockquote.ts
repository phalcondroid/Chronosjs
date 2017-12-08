import { HtmlElement } from "../Wrappers/HtmlElement";

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
        this.initialize(args);
    }
}

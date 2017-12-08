import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class B extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "B"
            )
        );
    }
}
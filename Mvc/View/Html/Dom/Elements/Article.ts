import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../../../Di/Service";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Article extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ARTICLE"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}

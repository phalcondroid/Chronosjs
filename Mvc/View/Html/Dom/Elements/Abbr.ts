import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../../../Di/Service";

export class Abbr extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ABBR"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
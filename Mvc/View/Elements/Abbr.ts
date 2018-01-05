
import { Service } from "../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

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
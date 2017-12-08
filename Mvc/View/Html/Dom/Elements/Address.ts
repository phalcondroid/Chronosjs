import { HtmlElement } from "../Wrappers/HtmlElement";
import { Service } from "../../../../../Di/Service";

export class Address extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "ADDRESS"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
}
import { Service } from "../../../Di/Service"; import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 *
 * @type
 */
export class Option extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "OPTION"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    public setValue(val)
    {
        this.attr("value", val);
        return this;
    }

    /**
     *
     */
    public getValue()
    {
        return this.attr("value");
    }

    /**
     *
     */
    public setContent(content)
    {
        this.append(content);
        return this;
    }

    /**
     *
     */
    public getContent()
    {
        return this.getElement().text;
    }
}

import { Service } from "../../../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Img extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "IMG"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    public width(width)
    {
        this.getElement().style.width = width;
        return this;
    }

    public height(height)
    {
        this.getElement().style.width = height;
        return this;
    }

    public src(src)
    {
        this.attr("src", src);
        return this;
    }
}

import { Service } from "../../../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 *
 */
export class A extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "A"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * [favIcon description]
     * @return {[type]} [description]
     */
    public favIcon(favIcon) {
        let icon = new Northwind.Tag.I()
        .class(favIcon);
        this.append(
            icon.getElement()
        );
        return this;
    }

    /**
     * [href description]
     * @param  {[type]} href [description]
     * @return {[type]}      [description]
     */
    public href(href) {
        this.attr("href", href);
        return this;
    }
}
import { Service } from "../../../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 *
 */
export class Button extends HtmlElement
{

    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BUTTON"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     * @param
     * @return
     */
    public type(type) {
        this.attr("type", type);
        return this;
    }

    /**
     *
     * @return
     */
    public favIcon(favIcon)
    {
        let icon = new Northwind.Tag.I()
        .class(favIcon);
        this.append(icon);
        return this;
    }

    /**
     *
     * @return
     */
    public success()
    {
        this.addClass("btn btn-success");
        return this;
    }

    /**
     *
     * @return
     */
    public notice()
    {
        this.addClass("btn btn-notice");
        return this;
    }

    /**
     *
     * @return
     */
    public default()
    {
        this.addClass("btn btn-default");
        return this;
    }

    /**
     *
     * @return
     */
    public primary()
    {
        this.addClass("btn btn-primary");
        return this;
    }

    /**
     * [warning description]
     * @return {[type]} [description]
     */
    public warning()
    {
        this.addClass("btn btn-warning");
        return this;
    }

    /**
     * [danger description]
     * @return {[type]} [description]
     */
    public danger()
    {
        this.addClass("btn btn-danger");
        return this;
    }
}
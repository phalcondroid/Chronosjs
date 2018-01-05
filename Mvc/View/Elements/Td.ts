import { Service } from "../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";

/**
 * [ViewElement description]
 * @type {[type]}
 */
export class Td extends HtmlElement
{
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "TD"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     * @param  {[type]} num [description]
     * @return {[type]}     [description]
     */
    public colspan(cols)
    {
        this.attr({
            "colspan" : cols
        });
        return this;
    }

        /** no pedi las hamburguesas soy un mk acompalene a comprar
     * @param  {[type]} row [description]
     * @return {[type]}     [description]
     */
    public rowspan(rows)
    {
        this.attr({
            "rowspan" : rows
        });
        return this;
    }
}
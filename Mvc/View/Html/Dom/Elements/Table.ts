import { Service } from "../../../../../Di/Service"; 
import { HtmlElement } from "../Wrappers/HtmlElement";
import { Thead } from "./Thead";
import { Tbody } from "./Tbody";
import { Tfoot } from "./Tfoot";
import { Tr } from "./Tr";

/**
 * [Table description]
 * @type {[type]}
 */
export class Table extends HtmlElement
{
    private tblElements;
    private thead;
    private tbody;
    private tfoot;
    private tr;
    private th;
    private td;
    private system;
    private header = false;
    private fnCHeader;
    private fnCContent;

    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "BR"
            )
        );
        this.setDi(new Service);
        
        this.thead = new Thead();
        this.tbody = new Tbody();
        this.tfoot = new Tfoot();

        this.initialize(args);
    }

    /**
     *
     */
    public getThead()
    {
        return this.thead;
    }

    /**
     *
     */
    public getTbody()
    {
        return this.tbody;
    }

    /**
     *
     */
    public toHead(component)
    {
        this.thead.append(
            component
        );
        this.append(
            this.thead
        );
        return this;
    }

    /**
     *
     */
    public toHeadTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.thead.append(
            tr
        );

        this.append(
            this.thead
        );

        return this;
    }

    /**
     *
     */
    public toBody(component)
    {
        this.tbody.append(
            component
        );

        this.append(
            this.tbody
        );

        return this;
    }

    /**
     *
     */
    public toFoot(component)
    {
        this.tfoot.append(
            component
        );

        this.append(
            this.tfoot
        );

        return this;
    }

    /**
     *
     */
    public toBodyTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tbody.append(
            tr
        );

        this.append(
            this.tbody
        );

        return this;
    }

    /**
     *
     */
    public toFootTr(component)
    {
        let tr = new Tr();
        tr.append(component);

        this.tfoot.append(
            tr
        );

        this.append(
            this.tfoot
        );

        return this;
    }
}
import { Service } from "../../../Di/Service";
import { HtmlElement } from "../Wrappers/HtmlElement";
import { FormTag } from "./forms/FormTag";

/**
 * 
 * @type 
 */
export class Input extends FormTag
{
    public static NUMBERS = 0;
    public static TEXT = 1;
    public static NO_SPECIAL_CHARACTERS = 2;
    public static TEXT_NO_SPECIAL_CHARACTERS = 3;
    public static NUMBERS_NO_SPECIAL_CHARACTERS = 4;

    /**
     * 
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "INPUT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }
    
    /**
     * [type description]
     * @param  {[type]} type [description]
     * @return {[type]}      [description]
     */
    public type(type)
    {
        this.attr("type", type);
        return this;
    }

    /**
     *
     */
    public setText()
    {
        this.attr("type", "text");
        return this;
    }

    /**
     *
     */
    public setHidden()
    {
        this.attr("type", "hidden");
        return this;
    }

    /**
     *
     */
    public setNumber()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    public setDate()
    {
        this.attr("type", "number");
        return this;
    }

    /**
     *
     */
    public setFile()
    {
        this.attr("type", "file");
        return this;
    }
}
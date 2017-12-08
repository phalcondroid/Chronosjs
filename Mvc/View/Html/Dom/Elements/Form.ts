import { Service }        from "../../../../../Di/Service";
import { HtmlElement }    from "../Wrappers/HtmlElement";
import { ElementAdapter } from "../Adapter/ElementAdapter"; 

/**
 * 
 * @type 
 */
export class Form extends HtmlElement
{
    /**
     *
     */
    private invalidElements = new Array;

    /**
     * 
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "FORM"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     * @param {Function} fn
     */
    public submit(fn : Function)
    {
        this.getElement().addEventListener("submit", function (event) {
            let returnCallback = fn.bind(this)(event);
            if (returnCallback == false || typeof returnCallback == "undefined") {
                event.preventDefault();
            }
            return true;
        }.bind(this));
    }

    /**
     * 
     */
    public getInvalidElements()
    {
        return this.invalidElements;
    }

    /**
     * 
     */
    public validate(fn : Function)
    {
        let elements = this.getFormElements();
        this.invalidElements = new Array;
        if (elements.length > 0) {
            for (let item of elements) {
                if (item.val() == "") {
                    this.invalidElements.push(
                        item
                    );
                }
            }
            if (this.invalidElements.length == 0) {
                return true;
            } else {
                return false;
            }
        }
        return false;
    }

    /**
     * 
     */
    public getFormElements()
    {
        let northwindElements = new Array;
        let elements = this.getElement().elements;
        for (let item of elements) {
            let aux = new ElementAdapter(item);
            let element = aux.get();
            if (element != false) {
                northwindElements.push(
                    element
                );
            }
        }
        return northwindElements;
    }

    /**
     * 
     */
    public setAutoComplete(data : Boolean)
    {
        if (data) {
            this.attr("autocomplete", "on");
        } else {
            this.attr("autocomplete", "off");
        }
        return this;
    }

    /**
     * 
     */
    public getAutoComplete()
    {
        return this.attr("autocomplete");
    }
}
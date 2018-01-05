import { ElementInterface } from "./ElementInterface";

export class CssManager implements ElementInterface
{
    /**
     * 
     */
    private element;

    /**
     * 
     * @param element 
     */
    public constructor()
    {
        
    }

    /**
     * 
     * @param element 
     */
    public setElement(element)
    {
        this.element = element;
        return this;
    }

    /**
     * 
     */
    public getElement()
    {
        return this.element;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param String|Object value
     * @return this
     */
    public css(key, value : any = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Handle style through javascript
     * 
     * @param  String key, css propertie
     * @param String|Object value
     * @return this
     */
    public setStyle(key, value : any = null) {
        if (typeof key == "object") {
            for (let keyItem in key) {
                this.element.style[key] = key[keyItem];
            }
        } else if (typeof key == "string" && value != null) {
            this.element.style[key] = value;
        } else if (typeof key == "string" && value == null) {
            return this.element.style[key];
        }
        return this;
    }

    /**
     * Set class attribute
     * 
     * @param  String attrClass 
     * @return this
     */
    public class(attrClass: string)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * Set new class but deletes previous classes added
     * 
     * @param String attrClass
     */
    public setClass(attrClass : string)
    {
        this.element.setAttribute(
            "class",
            attrClass
        );
        return this;
    } 

    /**
     * Concat class to element
     * 
     * @param  String attrClass
     * @return 
     */
    public addClass(attrClass : string)
    {
        let strClass = this.element.getAttribute("class");
        strClass += " " + attrClass;
        this.element.setAttribute("class", strClass);
        return this;
    }

    /**
     * Set childs as append does 
     * 
     * @return Object this
     */
    public addChild(element)
    {
        this.element.append(element);
        return this;
    }

    /**
     * 
     */
    public show()
    {
        this.element.style.display = "";
        return this;
    }

    /**
     * 
     */
    public hide()
    {
        this.element.style.display = "none";
        return this;
    }
}
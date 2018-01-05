import { ElementAdapter } from "../Adapter/ElementAdapter";

/**
 * 
 */
export class ElementManager
{
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
    }

    /**
     * Get document element
     * @return {document} element
     */
    public getElement()
    {
        return this.element;
    }

    /**
     * 
     * @return 
     */
    public getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }

    /**
     * Set id attribute
     * @param {String} id
     * @return this
     */
    public setId(id : string)
    {
        this.attr("id", id);
        return this;
    }

    /**
     * Get id attribute
     * @return {String}
     */
    public getId()
    {
        return this.attr("id");
    }

    /**
     * Set required attribute
     * å
     */
    public setRequired(req)
    {
        this.element.required = req;
        return this;
    }

    /**
     * Get required attribute
     * @return {Boolean}
     */
    public getRequired()
    {
        return this.element.required;
    }

    /**
     * 
     * @param append 
     */
    public checkAppendValue(append)
    {
        switch (typeof append) {
            case "string":
                    this.element.appendChild(
                        document.createTextNode(append)
                    );
                break;
            case "number":
                    this.element.appendChild(
                        document.createTextNode(
                            append.toString()
                        )
                    );
                break;
            case "object":
                    if (typeof append.getElement() != "undefined") {
                        this.verifyElement(
                            append.getElement()
                        );
                    } else {
                        this.verifyElement(
                            append
                        );
                    }
                break;
            default:

                break;
        }
    }

    /**
     * 
     * @param append 
     * @param type 
     */
    public verifyElement(append, type : string = "append")
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                if (typeof this.element[key].nodeType != "undefined") {
                    if (this.element[key].nodeType == 1) {
                        this.element[key].appendChild(
                            append
                        );
                    }
                }
            }
        } else {
            this.element.appendChild(
                append
            );
        }
    }

    /**
     * 
     * @param append 
     */
    public append(append)
    {
        if (Array.isArray(append) || (append instanceof HTMLCollection)) {
            for (let key in append) {
                this.checkAppendValue(
                    append[key]
                );
            }
        } else {
            this.checkAppendValue(
                append
            );
        }

        return this;
    }

    /**
     * Set class 
     * @param  { String } attrClass 
     * @return this
     */
    public class(attrClass: string)
    {
        this.element.setAttribute("class", attrClass);
        return this;
    }

    /**
     * 
     * @param  { String } cssClass
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
     * 
     * @param  { String } attribute
     * @return { this | attribute}
     */
    public attr(attr, value : any = false)
    {
        if (typeof attr == "object" && value == false) {
            for (let key in attr) {
                this.element.setAttribute(key, attr[key]);
            }
        } else if (typeof attr == "string" && value != false) {
            this.element.setAttribute(attr, value);
        } else if (typeof attr == "string" && value == false) {
            return this.element.getAttribute(attr);
        }
        return this;
    }

    /**
     * 
     * @param {String} attribute
     */
    public removeAttr(attr : string)
    {
        this.element.removeAttribute(attr);
        return this;
    }

    /**
     *
     * @param  
     * @return
     */
    public html(html: any = null)
    {
        if (html != null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     * 
     * @param html 
     */
    public setHtml(html : any = null)
    {
        if (html = null) {
            this.removeChildNodes();
            this.append(html);
            return this;
        } else {
            return this.element.innerHTML;
        }
    }

    /**
     *
     */
    private removeChildNodes()
    {
        if (this.element instanceof HTMLCollection) {
            for (let key in this.element) {
                this.removeChilds(
                    this.element[key],
                    this.element[key].childNodes
                );
            }
        } else {
            this.removeChilds(
                this.element,
                this.element.childNodes
            );
        }
    }

    /**
     *
     */
    private removeChilds(element, childs)
    {
        while (element.firstChild) {
            element.removeChild(
                element.firstChild
            );
        }
    }

    /**
     *
     * @param  {any = null}        val [description]
     * @return {[type]}   [description]
     */
    public val(val: any = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     *
     * @param  {any = null}        val [description]
     * @return {[type]}   [description]
     */
    public getValue(val: any = false)
    {
        if (val || typeof val == "string") {
            this.element.value = val;
            this.attr("value", val);
            return this;
        } else {
            return this.element.value;
        }
    }

    /**
     * 
     */
    public valAsInt()
    {
        return parseInt(this.val());
    } 

    /**
     * 
     * @param  {any = null}        text [description]
     * @return {[type]}   [description]
     */
    public text(text: any = false) {
        if (text) {
            this.element.innerHtml = text;
            return this;
        } else {
            return this.element.innerHtml;
        }
    }

    /**
     * 
     */
    public empty()
    {
        this.removeChildNodes();
        return this;
    }

    /**
     * 
     * @param element 
     */
    public remove(element = false)
    {
        if (element) {
            this.getElement().removeChild(
                element
            );
        } else {
            this.getElement().parentElement.removeChild(
                this.getElement()
            );
        }
    }

    /**
     * 
     */
    public getAsObject() : any[]
    {
        let childs = this.element.childNodes;
        let obj    = new Array();

        if (childs instanceof NodeList) {
            for (let key in childs) {
                if (typeof childs[key].nodeType != "undefined") {
                    switch (childs[key].nodeType) {
                        case Node.ELEMENT_NODE:
                                let adapter = new ElementAdapter(
                                    childs[key]
                                );
                                let auxElement = adapter.get();
                                let finalObj  = {};
                                let auxObject = auxElement.getAsObject();
                                finalObj[auxElement.getClassName().toLowerCase()] = auxObject;
                                if (auxObject.length > 0) {
                                    obj.push(finalObj);
                                }
                            break;
                        case Node.TEXT_NODE:
                                obj.push(
                                    childs[key].nodeValue
                                );
                            break;
                    }
                }
            }
        }
        return obj;
    }

    /**
     * 
     */
    public getAsJson()
    {
        let objects = this.getAsObject();
        return JSON.stringify(
            objects
        );
    }
}
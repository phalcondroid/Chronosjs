
import { ElementInterface } from "./ElementInterface";
import { ElementAdapter } from "../Adapter/ElementAdapter";

export class DomManager implements ElementInterface
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
     * @param id 
     */
    public getById(id : string, context = null)
    {
        let adapter = new ElementAdapter(
            document.getElementById(id)
        );
        return adapter.get();
    }

    /**
     *
     */
    public getByTag(name : string)
    {
        let elements = document.getElementsByTagName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }

        if (result.length == 0) {
            return false;
        }

        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     *
     */
    public getByClass(name : string, context = null)
    {
        let elements = document.getElementsByClassName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return this;
    }

    /**
     *
     */
    public getByName(name : string, context = null)
    {
        let elements = document.getElementsByName(
            name
        );
        let result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new ElementAdapter(
                    elements[key]
                );
                result.push(
                    adapter.get()
                );
            }
        }
        if (result.length == 0) {
            return false;
        }
        if (result.length == 1) {
            return result[0];
        }
        return result;
    }

    /**
     * 
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
     * [getClassName description]
     * @return {[type]} [description]
     */
    public getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}
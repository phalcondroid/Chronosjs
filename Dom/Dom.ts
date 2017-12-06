///<reference path="./Factory/TagAdapter.ts"/>

export class Dom
{
    /**
     * 
     */
    private element;

    /**
     * 
     * @param element
     */
    public constructor(element = null)
    {
        if (element != null)
            this.element = element;
    }

    /**
     * 
     * @param id 
     */
    public getById(id : string, context = null)
    {
        let adapter = new Northwind.Tag.TagAdapter(
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
                let adapter = new Northwind.Tag.TagAdapter(
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
        var elements = document.getElementsByClassName(
            name
        );
        var result = new Array();
        for (let key in elements) {
            if (typeof elements[key].nodeName == "string") {
                let adapter = new Northwind.Tag.TagAdapter(
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
                let adapter = new Northwind.Tag.TagAdapter(
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
    public getElement()
    {
        return this.element;
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
     * [getClassName description]
     * @return {[type]} [description]
     */
    public getClassName() {
        let funcNameRegex = /function (.{1,})\(/;
        let results  = (funcNameRegex).exec(this["constructor"].toString());
        return (results && results.length > 1) ? results[1] : "";
    }
}
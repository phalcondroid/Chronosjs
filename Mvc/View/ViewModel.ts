import { Container }   from "../../Di/Container";
import { HtmlElement } from "./Wrappers/HtmlElement";

export class ViewModel
{
    private views = [];
    private data = {};

    /**
     * 
     * @param data 
     */
    public constructor()
    {
        this.data = data;
        if (typeof this.data == "object") {
            throw "Data passed to view model must be an object with key, value"
        }
        let elements : any = this.getElements();
        this.checkElements(elements);
    }

    /**
     * 
     * @param elements 
     */
    private checkElements(elements)
    {
        if (Array.isArray(elements)) {
            for (let item of elements) {

            }
        } else {

        }
    }

    /**
     * 
     */
    private initializeViews(view)
    {

    }

    public set(data)
    {

    }

    public setElements(views)
    {
        this.views = views;
    }

    public getElements()
    {
        return this.views;
    }

    public get(key)
    {
        this.data[key];
    }
}
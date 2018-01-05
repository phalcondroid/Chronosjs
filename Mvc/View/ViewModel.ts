import { Container }   from "../../Di/Container";
import { HtmlElement } from "./Wrappers/HtmlElement";

export class ViewModel
{
    private views : any;
    private data = {};

    /**
     * 
     * @param data 
     */
    public constructor()
    {
    }

    /**
     * 
     * @param elements 
     */
    private resolveViews()
    {
        if (Array.isArray(this.views.elements)) {
            for (let item of this.views.elements) {
                let instance = new item();
                instance.set(this.data);
                instance.initialize();
            }
        } else {
            let instance = new this.views.elements;
            if (instance instanceof HtmlElement) {
                instance.set(this.data);
                instance.initialize();
            }
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
        if (typeof this.data == "object") {
            throw "Data passed to view model must be an object with key, value"
        }
        this.data = data;
        this.resolveViews();
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
        return this.data[key];
    }
}
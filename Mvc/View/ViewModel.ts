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
        if (Array.isArray(this.views)) {
            for (let instance of this.views) {
                instance.set(this.data);
                instance.initialize();
            }
        } else {
            console.log(this.views, this.views instanceof HtmlElement);
            if (this.views instanceof HtmlElement) {
                console.log("2", this.data);
                this.views.set(this.data);
                this.views.initialize();
            }
        }
    }

    public set(data)
    {
        if (typeof data != "object") {
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
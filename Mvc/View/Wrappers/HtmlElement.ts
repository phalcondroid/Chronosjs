
import { CssManager }       from "../Dom/CssManager";
import { EventManager }     from "../Dom/EventManager";
import { ParentManager }    from "../Dom/ParentManager";
import { ElementManager }   from "../Dom/ElementManager";
import { Injectable }       from "../../../Di/Injectable";
import { ElementInterface } from "../Dom/ElementInterface";
import { DependencyInjectorInterface } from "../../../Di/DependencyInjectorInterface";

export class HtmlElement implements DependencyInjectorInterface, ElementInterface
{
    protected viewModel; 
    private CSS_MANAGER     = "Chronos.Dom.CssManager";
    private PARENT_MANAGER  = "Chronos.Dom.DomManager";
    private ELEMENT_MANAGER = "Chronos.Dom.ElementManager"

    /**
     * 
     */
    private element;

    /**
     * 
     */
    private di;

    /**
     * 
     * @param tagName 
     */
    public constructor()
    {
        let localDecorator = new Proxy(
            this,
            this.getValidator()
        );
        return localDecorator;
    }

    public initialize(args : any = {})
    {

    }

    /**
     * 
     * @param viewModel 
     */
    public setViewModel(viewModel)
    {
        this.viewModel = viewModel;
    }

    /**
     * 
     */
    public getVienModel()
    {
        return this.viewModel;
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
     * 
     */
    private getCss() : CssManager
    {
        let css = this.getDi().get(
            this.CSS_MANAGER
        );
        css.setElement(this.getElement());
        return css;
    }

    /**
     * 
     */
    private getElementManager() : ElementManager
    {
        let em = this.getDi().get(
            this.ELEMENT_MANAGER
        );
        em.setElement(this.getElement());
        return em;
    }

    /**
     * 
     */
    private getParentManager() : ParentManager
    {
        let pm = this.getDi().get(
            this.PARENT_MANAGER
        );
        pm.setElement(this.getElement());
        return pm;
    }

    private getEventManager()
    {
        let em = this.getDi().get(
            "eventManager"
        );
        em.setElement(this.getElement());
        return em;
    }

    /**
     * 
     * @param tagName 
     */
    public create(tagName : string)
    {
        this.element = document.createElement(
            tagName
        );
        return this;
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

    /**
     * 
     */
    public getChecksum()
    {
        let str = this.getClassName() + JSON.stringify(this);
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /**
     * 
     */
    public getValidator() : Object
    {
        let validator = {
            get: function get(obj, prop) {
                switch (prop) {
                    case "append":
                        return this.getElementManager().append;
                    case "attr":
                        return this.getElementManager().attr;
                    case "setAttribute":
                        return this.getElementManager().setAttribute;
                    case "removeAttribute":
                        return this.getElementManager().removeAttribute;
                    case "class":
                        return this.getElementManager().class;
                    case "addClass":
                        return this.getElementManager().addClass;
                    case "removeClass":
                        return this.getElementManager().removeClass;
                    case "setId":
                        return this.getElementManager().setId;
                    case "getId":
                        return this.getElementManager().getId;
                    case "setRequired":
                        return this.getElementManager().setRequired;
                    case "getRequired":
                        return this.getElementManager().getRequired;
                    case "html":
                        return this.getElementManager().html;
                    case "setHtml":
                        return this.getElementManager().setHtml;
                    case "setValue":
                        return this.getElementManager().setValue;
                    case "val":
                        return this.getElementManager().val;
                    case "getValue":
                        return this.getElementManager().getValue;
                    case "valAsInt":
                        return this.getElementManager().valAsInt;
                    case "text":
                        return this.getElementManager().text;
                    case "empty":
                        return this.getElementManager().empty;
                    case "remove":
                        return this.getElementManager().remove;
                    case "getAsObject":
                        return this.getElementManager().getAsObject;
                    case "getAsJson":
                        return this.getElementManager().getAsJson;
                    case "getSibilings":
                        return this.getParentManager().getSiblings;
                    case "getParent":
                        return this.getParentManager().getParent;
                    case "getChilds":
                        return this.getParentManager().getChilds;
                    case "click":
                        return this.getParentManager().click;
                    case "doubleClick":
                        return this.getParentManager().doubleClick;
                    case "change":
                        return this.getParentManager().change;
                    case "keypress":
                        return this.getParentManager().keypress;
                    case "keydown":
                        return this.getParentManager().keydown;
                    case "keyup":
                        return this.getParentManager().keyup;
                    case "paste":
                        return this.getParentManager().paste;
                    case "blur":
                        return this.getParentManager().blur;
                    case "focus":
                        return this.getParentManager().focus;
                    case "submit":
                        return this.getParentManager().submit;
                    case "show":
                        return this.getCss().show;
                    case "hide":
                        return this.getCss().hide;
                    case "css":
                        return this.getCss().css;
                    case "setStyle":
                        return this.getCss().setStyle;
                    default:
                        return obj[name];
                }
            }   
        };
        return validator;
    }

    /**
     * 
     * @param di 
     */
    public setDi(di)
    {
        this.di = di;
        return this;
    }

    /**
     * 
     */
    public getDi() : any
    {
        return this.di;
    }
}
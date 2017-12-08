
import { ElementInterface } from "./ElementInterface";
import { ElementAdapter }   from "./Adapter/ElementAdapter";

export class ParentManager implements ElementInterface
{
    private element;

    public constructor()
    {
    }

    public getParent()
    {
        let parent = this.element.parentElement;
        if (parent.nodeType == 1) {
            let adapter = new ElementAdapter(
                parent
            );
            let tagObject = adapter.get();
            return tagObject;
        }
        return false;
    }

    public getSiblings()
    {
        let siblings = this.getParent().getChilds();
        if (siblings.length > 0) {
            let aux = new Array;
            for (let item of siblings) {
                if (item.getElement() != this.getElement()) {
                    aux.push(item);
                }
            }
            return aux;
        }
        return false;
    }

    public getChilds()
    {
        let childNodes = this.element.childNodes;
        let childs = new Array();
        for (let key in childNodes) {
            if (childNodes[key].nodeType == 1) {
                let adapter = new ElementAdapter(
                    childNodes[key]
                );
                let tagObject = adapter.get();
                childs.push(
                    tagObject
                );
            }
        }
        return childs;
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
}
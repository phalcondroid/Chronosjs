
import { Option }      from "./Option";
import { FormTag }     from "./forms/FormTag";
import { Service }     from "../../../Di/Service"; 
import { StaticModel } from "../../Model/StaticModel";

export class Select extends FormTag
{
    private choose = "Choose...";
    /**
     *
     */
    public constructor(args : any = {})
    {
        super();
        this.setElement(
            document.createElement(
                "SELECT"
            )
        );
        this.setDi(new Service);
        this.initialize(args);
    }

    /**
     *
     */
    public getSelected()
    {
        var option = new Option();
        option.setElement(
            this.getElement().options[
                this.getElement().selectedIndex
            ]
        );
        return option;
    }

    /**
     * 
     * @param fn 
     */
    public iterate(fn) {
        var childs = this.getChilds();
        for (var key in childs) {
            fn(childs[key]);
        }
        return this;
    }

    /**
     *
     */
    public setChoose(choose)
    {
        this.choose = choose;
    }

    /**
     *
     */
    public select(value)
    {
        var childs = this.getElement().childNodes;
        for (var key in childs) {
            if (childs[key].value == value) {
                childs[key].setAttribute("selected", "selected");
            }
        }
    }

    /**
     *
     * @param  content
     * @return
     */
    public build(content, fields)
    {
        if (content instanceof StaticModel) {
            content = JSON.parse(content.getData());
        }

        var i = 0;
        for (let key in content) {

            let option = new Option();

            let id = content[key][fields[0]];
            if (id === "") {
                id = content[key][fields[1]];
            }

            option.attr({
                "value" : id
            });
            option.append(
                content[key][fields[1]]
            );

            this.append([
                option
            ]);

            i++;
        }

        return this;
    }
}

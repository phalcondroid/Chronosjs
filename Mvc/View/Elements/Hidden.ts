import { Service } from "../../../Di/Service"; 
import { Input } from "./Input";

namespace Northwind.Tag
{
    /**
     * [Input description]
     * @type {[type]}
     */
    export class Hidden extends Input
    {
    	public constructor(args : any = {})
    	{
    		super();
            this.setHidden();
    	}
    }
}
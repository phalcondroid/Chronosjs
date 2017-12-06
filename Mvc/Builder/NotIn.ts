import { DataType }    from "./DataType";
import { Transaction } from "./Transaction";

export class NotIn extends Transaction
{
    /**
     * 
     */
    private conditions : any[] = new Array;

    /**
     * 
     * @param condition 
     */
    public constructor(condition : Object)
    {
        super();
        if (typeof condition == "object") {
            for (var key in condition) {
                if (condition[key] instanceof Array) {
                    var row = condition[key];
                    for (var key2 in row) {
                        var value2 = DataType.getValueByType(row[key2]);
                        this.conditions.push(
                            "row[\"" + key + "\"]" + " != " + value2
                        );
                    }
                } else {
                    throw "Not in value should be array";
                }
            }
        } else {
            throw "Not condition must be an object";
        }
    }

    public get()
    {
        return "(" + this.conditions.join(" && ") + ")";
    }
}
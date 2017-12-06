
import { DataType }    from "./DataType";
import { Transaction } from "./Transaction";

export class Or extends Transaction
{
    /**
     * 
     */
    private condition: Object = {};

    /**
     * 
     * @param condition 
     */
    public constructor(condition : any)
    {
        super();
        if (typeof condition == "object") {
            this.condition = condition;
        } else {
            throw "And condition must be an object";
        }
    }

    /**
     * 
     */
    public get(row)
    {
        var result = new Array();
        var size   = Object.keys(this.condition).length;
        if (this.condition instanceof Transaction) {
            result.push(
                this.condition.get(row)
            );
        }
        for (var key in row) {
            if (this.condition[key] instanceof Transaction) {
                result.push(
                    this.condition[key].get(row)
                );
            } else {
                if (row[key] == this.condition[key]) {
                    result.push(true);
                }
            }
        }
        for (let i = 0; i < size; i++) {
            if (result[i] == true) {
                return true;
            }
        }
        return false;
    }
}

import { RawModel } from "./RawModel";
import { SessionStorage } from "../../Di/SessionStorage";

export class StaticModel extends RawModel
{
    private index : number;
    private storage;
    di;

    /**
     *
     */
    public constructor(di)
    {
        super();
        this.storage = new SessionStorage;
        this.initialize();
    }

    /**
     *
     */
    public setData(data)
    {
        this.storage.set(
            "Models_Identify_" + this.getClassName(),
            JSON.stringify(
                data
            )
        );
    }

    /**
     *
     */
    public getData()
    {
        let data : string = this.storage.get(
            "Models_Identify_" + this.getClassName()
        );
        return data;
    }

    /**
     *
     */
    public getObjectData()
    {
        return JSON.parse(
            this.storage.get(
                "Models_Identify_" + this.getClassName()
            )
        );
    }

    /**
     *
     */
    public setIndex(index)
    {
        this.index = index;
    }

    /**
     *
     */
    public getIndex()
    {
        return this.index;
    }
}
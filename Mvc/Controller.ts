
import { Service } from "../Di/Service";
import { InjectionAwareInterface }    from "../Di/InjectionAwareInterface";

export class Controller
{
    di;
    /**
     *
     */
    private globals;

    /**
     *
     */
    public constructor()
    {
        this.di = new Service;
    }

    /**
     *
     */
    public setGlobals(globals)
    {
        this.globals = globals;
        return this;
    }

    /**
     *
     */
    public getGlobals(param : any = false)
    {
        if (param != false)
            return this.globals[param]; 
        return this.globals;
    }

    /**
     *
     */
    public initialize()
    {

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
     * @param key 
     * @param value 
     */
    public setDi(key : string, value : any) : void
    {
        this.di.set(key, value);
    }

    /**
     * 
     * @param key 
     */
    public getDi(key : string) : any
    {
        return this.di.get(key);
    }
}
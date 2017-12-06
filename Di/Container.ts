import { InjectionAwareInterface } from "./InjectionAwareInterface";

export class Container implements InjectionAwareInterface
{
    di;
    public constructor()
    {

    }

    /**
      * Set value to container
     * @param key 
     * @param value 
     */
    public set(key : string, value : any) : void
    {
        this.di.set(key, value);
    }

    /**
     * Get value from container
     * @param key 
     */
    public get(key : string) : void
    {
        return this.di.get(key);
    }
}
import { InjectionAwareInterface } from "./InjectionAwareInterface";

export class Container
{
    private container;

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
        this.container[key] = value;
    }

    /**
     * Get value from container
     * @param key 
     */
    public get(key : string) : void
    {
        return this.container[key];
    }
}
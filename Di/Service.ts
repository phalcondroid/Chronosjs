
import { Di } from "./Di";
import { InjectionAwareInterface } from "./InjectionAwareInterface";

/**
 * Wrapper to dependency injector class
 */
export class Service implements InjectionAwareInterface
{
    di;

    /**
     * 
     */
    public constructor()
    {
        this.di = Di;
    }

    /**
     * Set value to static dependency injector
     * @param key 
     * @param value 
     */
    public set(key : string, value : any) : void
    {
        this.di.set(key, value);
    }

    /**
     * Get value from static dependency injector
     * @param key 
     */
    public get(key : string) : void
    {
        return this.di.get(key);
    }
}
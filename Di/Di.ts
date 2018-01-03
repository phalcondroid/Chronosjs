/**
 * Dependency injector
 */
export class Di
{
    /**
     * Dependency injector container
     */
    private static di : Object = {};
    
    /**
     * Inject value to dependency injector
     * @param  String key
     * @param  Any    value
     * @return Void
     */
    public static set(key : string, value : any) : void
    {
        if (key == "" || typeof key == "undefined" || value == "" || typeof value == "undefined") {
            throw "Key and value must not be empty in \"Di\"";
        }
        Di.di[key] = value;
    }

    /**
     * Get value from dependency injector
     * @param  String key
     * @return Any
     */
    public static get(key : string) : any
    {
        if (key == "" || typeof key == "undefined") {
            throw "Key must not be empty in \"Di\"";
        }
        return Di.di[key];
    }
}
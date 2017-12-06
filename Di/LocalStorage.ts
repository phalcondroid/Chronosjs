
/**
 * Wrapper to local storage
 */
export class LocalStorage
{
    public constructor()
    {

    }

    /**
     * Set item in local storage
     * @param key string
     * @param value string
     * @returns void
     */
    public set(key : string, value : string) : void
    {
        localStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from local storage
     * @param key string
     * @returns any
     */
    public get(key : string) : any
    {
        return localStorage.getItem(
            key
        );
    }
}

/**
 * wrapper to session storage
 */
export class SessionStorage
{
    public constructor()
    {

    }

    /**
     * Set item in session storage
     * @param key string
     * @param value string
     * @returns void
     */
    public set(key : string, value : string) : void
    {
        sessionStorage.setItem(
            key,
            value
        );
        return;
    }

    /**
     * Get item from session storage
     * @param key string
     * @returns any
     */
    public get(key : string) : any
    {
        return sessionStorage.getItem(
            key
        );
    }
}
import { Scope } from "./Scope";

export class Config
{
    /**
     * 
     */
    private config : Object = {};

    /**
     * Set general config and environment
     *
     * @param Object config
     * @param Number env = Scope.Local 
     */
    public setConfig(config : Object, env : number = Scope.LOCAL)
    {
        this.config[env] = config;
    }

    /**
     * Get config was assigned
     *
     * @param Number env = Garlic.Environment.Scope.Local
     * @return Object
     */
    public getConfig(env : number = Scope.LOCAL) : Object
    {
        return this.config[env];
    }
}
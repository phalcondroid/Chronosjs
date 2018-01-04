import { Scope }             from "../Environment/Scope";
import { ResolveController } from "./ResolveController";
import { ResolvePaths } from "./ResolvePaths";
import { ConfigInterface } from "../Config/ConfigInterface";
import { ResolveService } from "./ResolveService";

export class Starter
{
    /**
     * 
     */
    private scope = Scope.DEV;

    /**
     * 
     */
    private config;

    /**
     * 
     */
    private controllers;

    /**
     * 
     */
    private data;

    /**
     * 
     */
    public constructor()
    {
        
    }

    /**
     * 
     * @param scope 
     */
    public setScope(scope)
    {
        this.scope = scope;
    }

    /**
     * 
     */
    public getScope()
    {
        return this.scope;
    }

    /**
     * 
     */
    public setControllers(controllers)
    {
        this.controllers = controllers;
    }

    /**
     * 
     */
    public getControllers()
    {
        return this.controllers;
    }

    /**
     * 
     * @param config 
     */
    public setConfig(config : ConfigInterface)
    {
        this.config = config;
    }

    /**
     * 
     */
    public getConfig()
    {
        return this.config.get();
    }

    /**
     * 
     * @param data 
     */
    public setData(data)
    {
        this.data = data;
    }

    /**
     * 
     */
    public getData()
    {
        return this.data;
    }

    /**
     * 
     */
    private resolvePath()
    {
        let config = this.getConfig();
        if (typeof config["paths"] == "undefined") {
            throw "Config: item paths must be mandatory.";
        }
        new ResolvePaths(
            config["paths"]
        ).resolve();
    }

    /**
     * 
     */
    private resolveService()
    {
        let config = this.getConfig();
        if (typeof config["service"] != "undefined") {
            new ResolveService(
                config["service"]
            ).resolve();
        }
    }

    /**
     * 
     */
    private resolveControllers()
    {
        let config = this.getConfig();
        if (typeof config["controllers"] == "undefined") {
            throw "Config: item controllers must be mandatory.";
        }
        new ResolveController(
            config["controllers"]
        ).resolve();
    }

    /**
     * 
     */
    public start()
    {
        this.resolvePath();
        this.resolveService();
        this.resolveControllers();
    }
}
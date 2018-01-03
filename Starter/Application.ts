import { Starter } from "./Starter";
import { Service } from "../Di/Service";
import { InitializeComponents } from "./Injector/InitializeComponents";
import { ConfigInterface } from "../Config/ConfigInterface";

export class Application
{
    /**
     * 
     */
    private config : ConfigInterface;
    
    /**
     * 
     */
    public constructor(config : ConfigInterface)
    {
        this.config = config;
        this.fetchDi();
        window.onbeforeunload = function () {
            sessionStorage.clear();
        }
    }

    /**
     * 
     */
    private fetchDi()
    {
        let injector = new InitializeComponents(
            new Service
        );
        injector.inject();
    }

    /**
     * 
     */
    public start()
    {
        console.log("application start");
        let starter = new Starter;
        starter.setConfig(this.config);
        starter.start();
    }
}
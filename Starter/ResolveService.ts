import { Service } from "../Di/Service";
import { Di } from "../Di/Di";

export class ResolveService
{
    /**
     * 
     */
    private service;

    /**
     * 
     */
    public constructor(service : any = false)
    {
        if (service == false) {
            throw "Config : Service must be a json object";
        };
        this.service = new service;
    }

    /**
     * 
     */
    public resolve()
    {
        this.service.initialize(new Di);
    }
}
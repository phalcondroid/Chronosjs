import { Service } from "../Di/Service";

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
        }
        this.service = new service(new Service);
    }

    /**
     * 
     */
    public resolve()
    {
        
    }
}
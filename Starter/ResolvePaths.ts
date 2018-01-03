import { Url } from "../Url/Url";
import { Service } from "../Di/Service";
import { Reflection } from "../Reflection/Reflection";

export class ResolvePaths
{
    /**
     * 
     */
    private paths : any;

    /**
     * 
     */
    private di;

    /**
     * 
     * @param paths 
     */
    public constructor(paths)
    {
        this.paths = paths;
        this.di    = new Service;
    }

    /**
     * 
     */
    public resolve()
    {
        let r = new Reflection();
        console.log("juju", r.read(this.di.get("url")));
        console.log(this.paths, this.di.get("url"));
        for (let key in this.paths) {
            this.di.get("url").set(
                key,
                this.paths[key]
            );
        }
    }
}
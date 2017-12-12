import { Url } from "../Url/Url";
import { Service } from "../Di/Service";

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
        for (let key in this.paths) {
            this.di.get("url").set(
                key,
                this.paths[key]
            );
        }
    }
}
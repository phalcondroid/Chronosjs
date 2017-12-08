import { Reflection } from "./Reflection";

export class Checksum
{
    /**
     * Object become to string
     */
    private stringObject : string = "";

    /**
     * Build checksum of any javascript object
     * @param Object obj
     */
    public constructor(obj : Object)
    {
        let reflection = new Reflection();
        this.stringObject = reflection.read(obj);
    }

    /**
     * Get base 64 from string
     * @param String str 
     */
    private utf8ToBase64(str) {
        return window.btoa(
            encodeURIComponent(str)
        );
    }

    /**
     * Get checksum
     * @return String
     */
    public getChecksum()
    {
        return this.utf8ToBase64(
            this.stringObject
        );
    }
}
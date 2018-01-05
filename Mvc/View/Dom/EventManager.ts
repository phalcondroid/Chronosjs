export class EventManager
{
    /**
     * 
     */
    private element : Document;

    /**
     * 
     * @param element 
     */
    public constructor()
    {
    }

    private setEventToElement(eventName, fn)
    {
        if (Array.isArray(this.element)) {
            for (let item of this.element) {
                this.element.addEventListener(
                    eventName,
                    fn.bind(this)
                );
            }
        } else {
            this.element.addEventListener(
                eventName,
                fn.bind(this)
            );
        }
        return this;
    }

    /**
     * 
     * @param  {Function} fn [description]
     * @return {[type]}      [description]
     */
    public click(fn)
    {
        this.setEventToElement(
            "click",
            fn
        );
        return this;
    }

    /**
     *
     */
    public doubleClick(fn)
    {
        this.setEventToElement(
            "dblclick",
            fn
        );
        return this;
    }

    /**
     *
     * @return {[type]} [description]
     */
    public change(fn)
    {
        this.setEventToElement(
            "change",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return {[type]} [description]
     */
    public keypress(fn)
    {
        this.setEventToElement(
            "keypress",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return {[type]} [description]
     */
    public keydown(fn) {
        this.setEventToElement(
            "keydown",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return {[type]} [description]
     */
    public keyup(fn) {
        this.setEventToElement(
            "keyup",
            fn
        );
        return this;
    }

    public paste(fn)
    {
        this.setEventToElement(
            "paste",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return {[type]} [description]
     */
    public blur(fn)
    {
        this.setEventToElement(
            "blur",
            fn
        );
        return this;
    }

    /**
     * [change description]
     * @return {[type]} [description]
     */
    public focus(fn)
    {
        this.setEventToElement(
            "focus",
            fn
        );
        return this;
    }

    /**
     * 
     * @param fn
     */
    public submit(fn)
    {
        this.setEventToElement(
            "submit",
            fn
        );
        return this;
    }
}
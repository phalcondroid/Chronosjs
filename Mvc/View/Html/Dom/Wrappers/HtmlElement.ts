export class HtmlElement
{
    /**
     * 
     */
    private element;

    /**
     * 
     */
    private cssManager;

    /**
     * 
     */
    private eventManager;
    
    public constructor(tagName)
    {
        this.element = document.createElement(
            tagName
        );
        this = new Proxy(this, this.getValidator());
    }

    public inject()
    {
        let validator = {
            set: function(obj, prop, value) {
              obj[prop] = value;
              return true;
            }
        };
          
        return new Proxy(this, validator);
    }

    public getValidator() : Object
    {
        let validator = {
            get: function get(obj, prop) {
                console.log("propertie", obj, prop);
                if (prop == "class") {
                    return function (cls) {
                        console.log("jajja" + cls);
                    };
                }
            }   
        };
        return validator;
    }
}
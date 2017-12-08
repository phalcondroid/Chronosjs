
import { HtmlElement } from "../Wrappers/HtmlElement";


    /**
     * [ViewElement description]
     * @type {[type]}
     */
    export class Bdi extends HtmlElement
    {
        /**
         *
         */
        public constructor(args : any = {})
        {
            super();
            this.setElement(
                document.createElement(
                    "BDI"
                )
            );
        }
    }
}

var Northwind;
(function (Northwind) {
    class Events {
        constructor() {
            this.events = {};
            this.params = {};
            this.others = {};
            this.nativeEvents = [];
        }
        contructor(element = null) {
            if (element instanceof Northwind.Html.Component) {
                this.element = element;
            }
            this.nativeEvents = [
                "click",
                "doubleClick",
                "change",
                "keypress",
                "keydown",
                "keyup",
                "paste",
                "blur",
                "focus",
                "submit"
            ];
        }
        /**
         *
         */
        attach(component, event, fn) {
            this.events[component.getClassName()][event][fn];
            return this;
        }
        /**
         *
         */
        add(otherEvent) {
            this.others[otherEvent];
            return this;
        }
        /**
         *
         */
        detachComponent(component) {
            return this;
        }
        /**
         *
         */
        detach(component, event, params = false) {
            this.events[component][event];
            this.params[component][event] = params;
            return this;
        }
        /**
         *
         */
        trigger(controller, event, callback, params = {}) {
            let result = this.events[controller][event](params);
            return this;
        }
        /**
         *
         */
        detachAll() {
            this.events = {};
            return this;
        }
        /**
         *
         */
        tag(component) {
            if (component instanceof Northwind.Html.Component) {
                this.element = component;
                return this;
            }
            throw "Component must be a instance of Northwind.Html.Component or Northwind.Tag";
        }
        setEventToElement(eventName, fn) {
            if (Array.isArray(this.element)) {
                for (let item of this.element) {
                    this.element.getElement().addEventListener(eventName, fn.bind(this));
                }
            }
            else {
                this.element.getElement().addEventListener(eventName, fn.bind(this));
            }
            return this;
        }
        /**
         *
         * @param  {Function} fn [description]
         * @return {[type]}      [description]
         */
        click(fn) {
            this.setEventToElement("click", fn);
            return this;
        }
        /**
         *
         */
        doubleClick(fn) {
            this.setEventToElement("dblclick", fn);
            return this;
        }
        /**
         *
         * @return {[type]} [description]
         */
        change(fn) {
            this.setEventToElement("change", fn);
            return this;
        }
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keypress(fn) {
            this.setEventToElement("keypress", fn);
            return this;
        }
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keydown(fn) {
            this.setEventToElement("keydown", fn);
            return this;
        }
        /**
         * [change description]
         * @return {[type]} [description]
         */
        keyup(fn) {
            this.setEventToElement("keyup", fn);
            return this;
        }
        paste(fn) {
            this.setEventToElement("paste", fn);
            return this;
        }
        /**
         * [change description]
         * @return {[type]} [description]
         */
        blur(fn) {
            this.setEventToElement("blur", fn);
            return this;
        }
        /**
         * [change description]
         * @return {[type]} [description]
         */
        focus(fn) {
            this.setEventToElement("focus", fn);
            return this;
        }
        /**
         *
         * @param fn
         */
        submit(fn) {
            this.setEventToElement("submit", fn);
            return this;
        }
        /**
         * [getClassName description]
         * @return {[type]} [description]
         */
        getClassName() {
            let funcNameRegex = /function (.{1,})\(/;
            let results = (funcNameRegex).exec(this["constructor"].toString());
            return (results && results.length > 1) ? results[1] : "";
        }
        getDom() {
            return Northwind.Service.Di.get("dom");
        }
        getAjax() {
            return Northwind.Service.Di.get("ajax");
        }
        getEm() {
            return Northwind.Service.Di.get("em");
        }
        getContainer() {
            return Northwind.Service.Di.get("container");
        }
        /**
         *
         * @param name
         */
        getTag(tag) {
            if (tag instanceof Northwind.Html.Component) {
                return Northwind.Service.Di.get("tag").tag(tag);
            }
            else {
                return Northwind.Service.Di.get("tag");
            }
        }
        /**
         *
         */
        getUrl() {
            let url = Northwind.Service.Di.get("url");
            return url;
        }
        getDi() {
            return Northwind.Service.DependencyInjector.get();
        }
    }
    Events.AFTER = 1;
    Events.BEFORE = 2;
    Events.ONCREATE = 3;
    Events.ONDELETE = 4;
    Events.ONCHANGE = 5;
    Northwind.Events = Events;
})(Northwind || (Northwind = {}));

import { Starter } from "./Starter";
import { Service } from "../Di/Service";
import { InitializeComponents } from "./Injector/InitializeComponents";

export namespace Chronos
{
    export class Application
    {
        /**
         * 
         */
        public constructor()
        {
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
            let starter = new Starter;
            starter.start();
        }
    }
}
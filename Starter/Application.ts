
export namespace Northwind
{
    export class Application
    {
        public constructor()
        {
            window.onbeforeunload = function () {
                sessionStorage.clear();
            }
        }
    }
}
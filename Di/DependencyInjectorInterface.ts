import { InjectionAwareInterface } from "./InjectionAwareInterface";

export interface DependencyInjectorInterface
{
    getDi() : Object;
    setDi(di : InjectionAwareInterface) : any;
}
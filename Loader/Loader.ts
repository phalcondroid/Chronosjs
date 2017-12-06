import { InjectionAwareInterface } from "../Di/InjectionAwareInterface";

export interface DiConstructorInjection
{
    initialize(di : InjectionAwareInterface);
}
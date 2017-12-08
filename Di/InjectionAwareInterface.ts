
/**
 * Guarantee for dependency injector compatibility
 */
export interface InjectionAwareInterface
{
    set(key : any, value : any) : void;
    get(key : any) : any;
}
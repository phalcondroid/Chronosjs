
/**
 * Guarantee for dependency injector compatibility
 */
export interface InjectionAwareInterface
{
    di;
    set(key : any, value : any) : void;
    get(key : any) : any;
}
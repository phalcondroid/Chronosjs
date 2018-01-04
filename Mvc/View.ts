
/*function View(options) {
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("@View(): called", target, propertyKey, descriptor);
    }
}*/
function View(obj)
{
    return (target: any, key: string, descriptor: any) => {
        var originalMethod = descriptor.value; 
        descriptor.value = function (...args: any[]) {
            let viewModel = args[0];
            viewModel.setElements(obj.elements);
            return originalMethod.apply(this, [viewModel]);
        }
        return descriptor;
    }
}
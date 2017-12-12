
export class ArrayHelper
{
    public constructor()
    {

    }

    public static inArray(container : any[], element : any) : Boolean
    {
        for (var key in container) {
            if (container[key] == element) {
                return true;
            }
        }
        return false;
    }
}

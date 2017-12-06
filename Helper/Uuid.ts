import { MathHelper } from "./MathHelper";

export class Uuid
{
    public constructor()
    {
        
    }

    public static get()
    {
        return MathHelper.getS4() + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() + '-' +
                MathHelper.getS4() + '-' + MathHelper.getS4() +
                MathHelper.getS4() + MathHelper.getS4();
    }
}
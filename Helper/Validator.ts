import { Message } from "../Errors/Message";

export class Validator
{
    public static validStructArray(data : any[])
    {
        try {
            if (Array.isArray(data)) {
                var firstPosition = data[0];
                if (typeof firstPosition == "object") {
                    return true;
                } else {
                    throw Message.NOT_VALID_ARRAY_OBJECT;
                }
            } else {
                throw Message.NOT_VALID_ARRAY;
            }
        } catch (e) {

        }
    }
}

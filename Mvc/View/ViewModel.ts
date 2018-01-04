import { Container } from "../../Di/Container";

export class ViewModel
{
    private static views = [];
    private data = {};

    public constructor(data)
    {
        this.data = data;
        console.log(data, ViewModel.getElements());
    }

    public static setElements(views)
    {
        ViewModel.views = views;
    }

    public static getElements()
    {
        return ViewModel.views;
    }

    public get(key)
    {
        this.data[key];
    }
}
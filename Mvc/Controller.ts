import { Service } from "../Di/Service";
import { Injectable } from "../Di/Injectable";

export class Controller
{
    private di = new Service;

    /**
     * 
     */
    public constructor(args = {})
    {
        let injectable = new Injectable();
        return injectable.inject(this);
    }

    public initialize()
    {
        
    }

    /**
     * 
     */
    public getDi()
    {
        return this.di;
    }

    /**
     * 
     * @param di 
     */
    public setDi(di)
    {
        this.di = di;
    }
}
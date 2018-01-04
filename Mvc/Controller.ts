import { Service } from "../Di/Service";
import { Injectable } from "../Di/Injectable";

export class Controller
{
    private di = new Service;

    private viewModel = {};

    /**
     * 
     */
    public constructor(resolveProperties : Function = null)
    {
        let injectable = new Injectable();
        return injectable.inject(this, resolveProperties);
    }

    /**
     * 
     */
    public initialize()
    {
        
    }

    /**
     * 
     * @param key 
     * @param viewModel 
     */
    public setViewModel(viewModel)
    {
        this.viewModel = viewModel;
    }

    /**
     * 
     * @param key 
     */
    public getViewModel()
    {
        return this.viewModel;
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
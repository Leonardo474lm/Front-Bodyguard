import { Client } from "./client";
import { Bodyguard } from "./bodyguard";


export class Service {
    id: number = 0;
    date: Date = new Date(Date.now());
    hours_start: number = 9;
    location: string = "";
    st_aceptar:boolean=false; 
    st_pagado: boolean = false;
    st_anulado:boolean = false;
    clients:Client = new Client;
    bodyguards:Bodyguard = new Bodyguard;
    payment_method:string = "";
    review:number = 0;
}



import { Client } from "./client";
import { Bodyguard } from "./bodyguard";
import { Payment } from "./payment";


export class Service {
    id: number = 0;
    date: Date = new Date(Date.now());
    hours_start: number = 0;
    location: string = "";
    st_aceptar:boolean=false; 
    st_pagado: boolean = false;
    st_anulado:boolean = false;
    clients:Client = new Client;
    bodyguards:Bodyguard = new Bodyguard;
    payment_method:Payment = new Payment();
    review:number = 0;
}



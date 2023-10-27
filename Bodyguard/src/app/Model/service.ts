export class Service {
    id: number = 0;
    date: Date = new Date(Date.now());
    hours_start: number = 9;
    location: string = "";
    st_aceptar:boolean=false; 
    st_pagado: boolean = false;
    st_anulado:boolean = false;
    clients:string = "";
    bodyguards:string = "";
    payment_method:string = "";
    review:number = 0;
}



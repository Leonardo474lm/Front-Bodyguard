import { Injectable } from '@angular/core';

import { environment } from 'src/Environments/environment';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Model/service';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class iServiceService {
  private url =   `${base_url}/services`;
  private listaCambio = new Subject<Service[]>();
  private listaPeticiones = new Subject<Service[]>();

  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Service[]>(this.url + "/list");
  }
  findfecha(date: Date): Observable<any> {
    return this.http.get<Service[]>(this.url + "/findbyfecha/"+date);
  }
  ListServiceUser(clientId:number){
    return this.http.get<Service[]>(this.url + "/client/"+clientId);
  }
  ListServiceBodyguard  (ser:number){
    return this.http.get<Service[]>(this.url + "/bodiguard/"+ser);
  }

  insert(service: Service) {
    return this.http.post(this.url + '/insert', service);
  }

  update(dev: Service){
    return this.http.put(this.url + "/Update", dev);
  }

  listById(idService:number) {
    return this.http.get<Service>(this.url + "/" + idService);
  }

  setList(listaNueva: Service[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }


  listPeticiones(id:number): Observable<any> {
    return this.http.get<Service[]>(this.url + "/peticion/"+id);
  }
  getListPeticiones(){
     return this.listaPeticiones.asObservable();
  }
  setListPeticiones(newList : Service[]){
    this.listaPeticiones.next(newList)//enviar la nueva lista a los suscriptores
  }

  getTotalGastosByClient(clientId:number){
    return this.http.get(this.url+"/gastototal/"+clientId);
  }
  getTotalServiciosContratadosByClient(clientId:number){
    return this.http.get(this.url+"/totalserv/"+clientId);
  }


  countClientsByBodyguard(bodyId:number){
    return this.http.get<number>(this.url+"/countclientesByBodyguard/"+bodyId);
  }
  getTotalEarningsForBodyguard(bodyId:number)
  {
    return this.http.get<number>(this.url+"/pagototal/"+bodyId);
  }
  getTotalHoursWorkedForBodyguard(bodyId:number)
  {
     return this.http.get<number>(this.url+"/HourTotal/"+bodyId);
  }

}

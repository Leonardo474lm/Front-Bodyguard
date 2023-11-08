import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Model/service';
const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class iServiceService {
  private url = `${base_url}/services`;
  private listaCambio = new Subject<Service[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Service[]>(this.url + "/list");
  }
  findfecha(date: Date): Observable<any> {
    return this.http.get<Service[]>(this.url + "/findbyfecha/"+date);
  }
  ListServiceUser(ser:number){
    return this.http.get<Service[]>(this.url + "/client/"+ser);
  }
  ListServiceBodyguard  (ser:number){
    return this.http.get<Service[]>(this.url + "/bodiguard/"+ser);
  }
  GetHorasTotales(ser:number){
    return this.http.get<Service[]>(this.url + "/HourTotal/"+ser);
  }
  GetPagosTotalesBody(bodyid:number){
    return this.http.get<Service[]>(this.url + "/Pagototal/"+bodyid);
  }
  GetCantidadClientBody(bodyid:number){
    return this.http.get<Service[]>(this.url + "/countclientesByBodyguard/"+bodyid);
  }
  insert(service: Service) {
    return this.http.post(this.url + '/insert', service);
  }
  
  update(dev: Service){
    return this.http.put(this.url + "/Update", dev);
  }

  setList(listaNueva: Service[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
} 

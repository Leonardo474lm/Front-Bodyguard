import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../Model/service';

@Injectable({
  providedIn: 'root'
})
export class iServiceService {
  private url = "http://localhost:8080/Clients";
  private listaCambio = new Subject<Service[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Service[]>(this.url + "/List");
  }
  findfecha(date: Date): Observable<any> {
    return this.http.get<Service[]>(this.url + "/findbyfecha/"+date);
  }
  ListServiceUser(ser:number): Observable<any> {
    return this.http.get<Service[]>(this.url + "/client/"+ser);
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

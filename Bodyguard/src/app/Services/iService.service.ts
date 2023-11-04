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
  insert(service: Service) {
    return this.http.post(this.url + '/insert', service);
  }

  setList(listaNueva: Service[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}

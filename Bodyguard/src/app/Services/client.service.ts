import { Injectable } from '@angular/core';
import { Client } from '../Model/client';
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/Environments/environment';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url = `${base_url}/Clients`;


  private listaCambio = new Subject<Client[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Client[]>(this.url + "/List");
  }

  insert(client: Client) {
    return this.http.post(this.url + '/insert', client);
  }

  setList(listaNueva: Client[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(iddevice:number){
    return this.http.get<Client>(this.url+"/"+iddevice);
  }
  update(dev: Client){
    return this.http.put(this.url + "/update", dev);
  }
  getByUserId(id:number){
    return this.http.get<Client>(this.url+"/user/"+id)
  }
}

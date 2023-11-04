import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:8080/Clients";
  private listaCambio = new Subject<User[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<User[]>(this.url + "/List");
  }
  insert(User: User) {
    return this.http.post(this.url + '/insert', User);
  }

  setList(listaNueva: User[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  listId(id:number){
    return this.http.get<User>(this.url+"/"+id);
  }
  update(dev: User){
    return this.http.put(this.url + "", dev);
  }
}

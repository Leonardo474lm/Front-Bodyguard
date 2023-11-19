import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { environment } from 'src/Environments/environment';

import { Payment } from '../Model/payment';
const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private url = `${base_url}/Payment`;
  private listaCambio = new Subject<Payment[]>();
  constructor(private http:HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Payment[]>(this.url + "/List");
  }
  insert(author: Payment) {
    return this.http.post(this.url + '/Insert', author);
  }

  setList(listaNueva: Payment[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  update(specialization:Payment){
    return this.http.put<Payment>(this.url+"/update",specialization);
  }
  listId(iddevice:number){
    return this.http.get<Payment>(this.url+"/"+iddevice);
  }
  listById(id:number){
    return this.http.get<Payment>( this.url+ "/"+id);
  }
  delete(id:number)
  {
    return this.http.delete<Payment>( this.url+"/Delete/"+id);
  }

}

<<<<<<< HEAD
import { Injectable, OnInit } from '@angular/core';
=======
import { Injectable } from '@angular/core';
>>>>>>> bf3a92b9863cfe9b8880d18b198b3da96c592b60
import { Client } from '../Model/client';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private url = "http://localhost:8080/Clients";
  private listaCambio = new Subject<Client[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Client[]>(this.url + "/List");
  }
  insert(author: Client) {
    return this.http.post(this.url + '/insert', author);
  }

<<<<<<< HEAD
 
 private url = "http://localhost:8080/Clients";
  private listaCambio = new Subject<Client[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Client[]>(this.url + "/List");
  }
  insert(author: Client) {
    return this.http.post(this.url + '/insert', author);
  }

=======
>>>>>>> bf3a92b9863cfe9b8880d18b198b3da96c592b60
  setList(listaNueva: Client[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}

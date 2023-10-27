import { Injectable } from '@angular/core';
import { Specialization } from '../Model/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private url = "http://localhost:8080/Specialization";
  private listaCambio = new Subject<Specialization[]>();
  // inyectando httpClient
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Specialization[]>(this.url + "/List");
  }
  insert(author: Specialization) {
    return this.http.post(this.url + '/insert', author);
  }

  setList(listaNueva: Specialization[]) {
    this.listaCambio.next(listaNueva);//enviar la nueva lista a los suscriptores
  }
  getList() {
    return this.listaCambio.asObservable();
  }
}

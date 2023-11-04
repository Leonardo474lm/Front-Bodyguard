import { Injectable } from '@angular/core';
import { Specialization } from '../Model/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private url = "http://localhost:8081/Specialization";
  private listaCambio = new Subject<Specialization[]>();
 
  constructor(private http: HttpClient) { }
  list(): Observable<any> {
    return this.http.get<Specialization[]>(this.url + "/List");
  }
  insert(author: Specialization) {
    return this.http.post(this.url + '/insert', author);
  }

  setList(listaNueva: Specialization[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  update(specialization:Specialization){
    return this.http.put<Specialization>(this.url+"/update",specialization);
  }

  listId(id:number){
    return this.http.get<Specialization>(this.url+"author/"+id);
  }

}

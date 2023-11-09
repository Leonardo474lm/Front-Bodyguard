import { Injectable } from '@angular/core';
import { Specialization } from '../Model/specialization';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/Environments/environment';


const base_url = environment.base;

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  private url = `${base_url}/Specialization`;
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
  listId(iddevice:number){
    return this.http.get<Specialization>(this.url+"/"+iddevice);
  }
  listById(id:number){
    return this.http.get<Specialization>( this.url+ "/"+id);
  }
  delete(id:number)
  {
    return this.http.delete<Specialization>( this.url+"/Delete/"+id);
  }

}

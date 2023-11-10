import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environment';
import { Bodyguard } from '../Model/bodyguard';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class BodyguardService {
  private url = `${base_url}/Bodyguard`;
  private listBodyguards = new Subject<Bodyguard[]>();
  constructor(
    private http:HttpClient
  ) {

  }
  getList():Observable<any>{
    return this.http.get(this.url+"/List")
  }

  getListObs(){
      return this.listBodyguards.asObservable();
  }
  getById(id:number){
    return this.http.get<Bodyguard>(this.url+"/"+id)
  }







}

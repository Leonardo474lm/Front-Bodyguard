import { Injectable } from '@angular/core';
import { environment } from 'src/Environments/environment';
import { Bodyguard } from '../Model/bodyguard';
import { BehaviorSubject, Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Specialization } from '../Model/specialization';
import { Body } from '../Model/Body';

const base_url = environment.base;
@Injectable({
  providedIn: 'root'
})
export class BodyguardService {
  private url = `${base_url}/Bodyguard`;
  private listBodyguards = new Subject<Bodyguard[]>();
   public search = new BehaviorSubject<string>("");
  constructor(
    private http:HttpClient
  ) {

  }
  getList():Observable<any>{
    return this.http.get<Bodyguard[]>(this.url+"/List")
  }

  getListObs(){
      return this.listBodyguards.asObservable();
  }
  getById(id:number){
    return this.http.get<Bodyguard>(this.url+"/"+id)
  }
  getByUserMail(mail:String){
    return this.http.get<Bodyguard>(this.url+"/usermail/"+mail);
  }

  insert(bodyguard: Bodyguard): Observable<any> {
    return this.http.post(this.url + '/insert', bodyguard);
  }
  insertByAdmin(body: Body): Observable<any> {
    return this.http.post(this.url + '/insert', body);
  }
  update(bod: Bodyguard): Observable<any> {
    return this.http.put(this.url + "/Update", bod);
  }
  list(): Observable<any> {
    return this.http.get<Bodyguard[]>(this.url + "/List");
  }
  listId(iddevice:number){
    return this.http.get<Bodyguard>(this.url+"/"+iddevice);
  }
  byspecialization(specialization: Specialization): Observable<any> {
    return this.http.get<Bodyguard[]>(this.url + "/bodyguards/byspecialization/"+specialization);
  }
  ListbyDistrict(dis: string): Observable<any> {
    return this.http.get<Bodyguard[]>(this.url + "/ListbyDistrict/"+dis);
  }
  getReviewBodyguard(rev:number): Observable<any> {
      return this.http.get<Bodyguard[]>(this.url + "/getReviewBodyguard/"+rev);
  }

  setList(listaNueva: Bodyguard[]) {
    this.listBodyguards.next(listaNueva);//enviar la nueva lista a los suscriptores
  }







}

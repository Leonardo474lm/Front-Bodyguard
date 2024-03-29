import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/Environments/environment';
import { Role } from '../Model/role';
import { HttpClient } from '@angular/common/http';
const base_url=environment.base;

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  url:String = `${base_url}/roles`
  private listaCambio = new Subject<Role[]>();
  constructor(
    private http:HttpClient
  ) { }

   list(): Observable<any> {
    return this.http.get<Role[]>(this.url + "/list");
  }
  setList(listaNueva: Role[]) {
    this.listaCambio.next(listaNueva);
  }
  getList() {
    return this.listaCambio.asObservable();
  }
  getRoleByUserId(id:number){
    return this.http.get<Role>(this.url+"/user/"+id)
  }
  insertrole(role: Role){
    return this.http.post(this.url+"/insert",role)
  }
  Lista():Observable<any>{
    return this.http.get<Role>(this.url+"/lista")
  }
}

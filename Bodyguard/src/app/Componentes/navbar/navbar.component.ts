import { Role } from './../../Model/role';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Model/User';
import { RoleService } from 'src/app/Services/role.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  activeButton: number = 0;
  role:any="";
  user:User;
  userBack:User;
  // role:string="Administrador";
  // role:string="Bodyguard";

  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'BODY') {
      return true;
    } else {
      return false;
    }
  }
  constructor(
    public route: ActivatedRoute,
    private roleService: RoleService,
    private userServ:UserService
    )
  {
    this.user=new User();
    this.userBack=new User();
  }
  ngOnInit(): void {
    const store = localStorage.getItem("userProfile");
    if(store)this.user= JSON.parse(store) as User;

    this.userServ.getByEmail(this.user.email).subscribe(user1=>{
      this.userBack=user1;
      this.roleService.getRoleByUserId(this.userBack.id).subscribe(data=>{
        this.role=data.rol;
        console.log("user role",this.role)
      })
    })


     
    
  }
cambioderol(){

}
  // showFiller = false;

}

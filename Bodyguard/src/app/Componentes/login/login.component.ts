import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { LoginService } from 'src/app/Services/login.service';
import { RoleService } from 'src/app/Services/role.service';
import { UserService } from 'src/app/Services/user.service';

//import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  role: String;
  hide = true;
  // showLogin = true;

  user:User;
  form:  FormGroup = new FormGroup({});
  message: string;
  userTemp:User;


  constructor(
    private router:Router,
    public route:ActivatedRoute,
    private userService:UserService,
    private roleService:RoleService,
  ){
    this.message="";
    this.user=new User();
    this.userTemp=new User();
    this.role=new String("");

  }

  ngOnInit(): void {
     const store = localStorage.getItem("userProfile");
    if(store){
        this.user= JSON.parse(store) as User;
    }else {
      this.user.email=""
      this.user.password="";
    };

    this.form = new FormGroup(
      {
        email:new FormControl(this.user.email,[Validators.email,Validators.required]),
        password: new FormControl(this.user.password,[Validators.required])
      }
    )

  }

  submit():void {
    this.user.email= this.form.value['email'];
    this.user.password= this.form.value['password'];

    if(this.form.valid)
    {
      this.userService.getByEmail(this.user.email).subscribe(data=>{
        this.userTemp=data;
        console.log("user data",this.userTemp)
        if(this.userTemp.email===this.user.email && this.userTemp.password==this.user.password)
        {
          this.roleService.getRoleByUserId(this.userTemp.id).subscribe(data=>
            {this.role=data.rol
              switch(this.role)
              {
                case "Administrador": this.router.navigate(["/bodyguard/pages/admin"]); break;
                case "Cliente": this.router.navigate(["/bodyguard/pages/client"]); break;
                case "Bodyguard": this.router.navigate(["/bodyguard/pages/bodyguard"]); break;
              }
            })
           this.userTemp=new User();
           console.log("user null",this.userTemp);
           this.message="";
        }
        else this.message="email y/o pasword incorrectos";
      })
      localStorage.setItem("userProfile",JSON.stringify(this.user));
      this.message="";
    }
    else{
      this.message="Complete los campos obligatorios"
    }


  }

  authentication(email:String,password:String){


  }


goToRegister() {
  this.router.navigate(["register"]);
}



}



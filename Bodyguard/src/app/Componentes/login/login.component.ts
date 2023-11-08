import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { LoginService } from 'src/app/Services/login.service';

//import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  role: string=""
  hide = true;
  showLogin = true;

  user:User;
  form:  FormGroup = new FormGroup({});
  message: String;

  constructor(
    private router:Router,
    public route:ActivatedRoute
  ){
    this.message="";
    this.user=new User();

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
      console.log(this.form);
      localStorage.setItem("userProfile",JSON.stringify(this.user));
       this.router.navigate(["/bodyguard"]);
      this.message="";
    }
    else{
      this.message="Complete los campos obligatorios"
    }

    
  }
  

goToRegister() {
  const url = 'URL_DE_DESTINO'; // Reemplaza 'URL_DE_DESTINO' con la URL de la página que deseas abrir en la ventana emergente.
  const windowName = 'PopupWindow'; // Nombre de la ventana emergente
  const windowFeatures = 'width=600,height=400'; // Características de la ventana emergente (ancho, alto, etc.)
  this.showLogin = false;
  this.router.navigate(["register"]);
  

  window.open('register',windowName,windowFeatures);
}



}

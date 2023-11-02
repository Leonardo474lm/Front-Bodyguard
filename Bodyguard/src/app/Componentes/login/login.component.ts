import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';

//import { JwtHelperService } from '@auth0/angular-jwt';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit{

  username: string = ""
  password: string = ""
  mensaje: string = ""
  role: string=""
  activeButton: number = -1;
  hide = true;
  mostrarLogin = false;
  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private loginService: LoginService
  ){}
  ngOnInit(): void {
  }
  iniciarSesion()
  {
    this.router.navigate(['navar']);
    

  }
  

  
}

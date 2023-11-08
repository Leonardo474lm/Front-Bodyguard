import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user: User;
  form: FormGroup = new FormGroup({});
  value: string = '';
  hide = true;

  constructor(
    private router:Router,
    public route: ActivatedRoute
    ) {
    this.user = new User();
  }
  ngOnInit(): void {
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
     
    }
    else{
      // this.message="Complete los campos obligatorios"
    }


  }

}

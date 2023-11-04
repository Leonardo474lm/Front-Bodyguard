import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  value:string="";
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
    
  }
}

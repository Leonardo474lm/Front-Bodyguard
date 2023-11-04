import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
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
    public route:ActivatedRoute,
    private renderer: Renderer2, private el: ElementRef
  ){
    this.message="";
    this.user=new User();

  }
  ngOnInit(): void {
    const element = this.el.nativeElement.querySelectorAll('mat-mdc-form-field-bottom-align');
     element.forEach((element: HTMLElement) => {
      this.renderer.removeClass(element, 'mat-mdc-form-field-bottom-align');
    });

  }
}

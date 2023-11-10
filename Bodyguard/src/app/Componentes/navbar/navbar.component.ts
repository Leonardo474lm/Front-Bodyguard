import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: number = 0;
  role:string="Cliente";

  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'BODY') {
      return true;
    } else {
      return false;
    }
  }
  constructor(public route: ActivatedRoute,)
  {

  }
cambioderol(){

}
  // showFiller = false;

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: number = -1;
  role:string="ADMIN";
<<<<<<< HEAD
=======
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

>>>>>>> bf3a92b9863cfe9b8880d18b198b3da96c592b60
  // showFiller = false;
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'BODY') {
      return true;
    } else {
      return false;
    }
  }
}
  
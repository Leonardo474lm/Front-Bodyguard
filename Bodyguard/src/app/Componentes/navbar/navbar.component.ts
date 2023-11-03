import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: number = -1;
  role:string="ADMIN";
  // showFiller = false;
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'BODY') {
      return true;
    } else {
      return false;
    }
  }
}
  
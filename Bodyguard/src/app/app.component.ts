import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Bodyguard';
  activeButton: number = -1;
  
  role:string="";
  setActiveButton(index: number): void {
    this.activeButton = index;
  }
  cerrar() {
    sessionStorage.clear();
  }
  validarRol() {
    if (this.role == 'ADMIN' || this.role == 'USER' || this.role == 'BODY') {
      return true;
    } else {
      return false;
    }
  }

}

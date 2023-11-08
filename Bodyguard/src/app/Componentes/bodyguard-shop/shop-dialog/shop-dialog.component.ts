import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.css']
})
export class ShopDialogComponent {
  form:FormGroup;
  selectValue:String;
  constructor(){
    this.form=new FormGroup({});
    this.selectValue="";

  }

  submit(){

  }

}

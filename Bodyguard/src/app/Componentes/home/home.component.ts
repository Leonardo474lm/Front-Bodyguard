import { Component, OnInit } from '@angular/core';
import { iServiceService } from 'src/app/Services/iService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ingreso:number;
  
  numClientes:number;
  constructor(   
    private iServ:iServiceService,
  ){
   
    this.numClientes=0;
    this.ingreso=0;
   
   
  }

  ngOnInit(): void {

  this.iServ.gettotalmoney().subscribe(data=>this.ingreso=data);
  this.iServ.getclienttotal().subscribe(data=>this.numClientes=data);

  }


}

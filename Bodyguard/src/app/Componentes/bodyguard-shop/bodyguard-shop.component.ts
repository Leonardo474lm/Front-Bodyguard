import { Component, OnInit } from '@angular/core';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { BodyguardService } from 'src/app/Services/bodyguard.service';

@Component({
  selector: 'app-bodyguard-shop',
  templateUrl: './bodyguard-shop.component.html',
  styleUrls: ['./bodyguard-shop.component.css']
})
export class BodyguardShopComponent implements OnInit {

  arrBodyguards:Bodyguard[];

  constructor(
    private bodyguardService:BodyguardService
  ){
    this.arrBodyguards= [];
  }
  ngOnInit(): void {
    this.bodyguardService.getListObs().subscribe(data=>this.arrBodyguards=data);

    this.bodyguardService.getList().subscribe(data=>this.arrBodyguards=data);
  }

}

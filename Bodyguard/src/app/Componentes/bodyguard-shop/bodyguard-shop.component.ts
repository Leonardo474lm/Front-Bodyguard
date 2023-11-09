import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { BodyguardService } from 'src/app/Services/bodyguard.service';
import { ShopDialogComponent } from './shop-dialog/shop-dialog.component';

@Component({
  selector: 'app-bodyguard-shop',
  templateUrl: './bodyguard-shop.component.html',
  styleUrls: ['./bodyguard-shop.component.css']
})
export class BodyguardShopComponent implements OnInit {

  arrBodyguards:Bodyguard[];

  constructor(
    private dialog:MatDialog,
    private bodyguardService:BodyguardService
  ){
    this.arrBodyguards= [];
  }
  ngOnInit(): void {
    this.bodyguardService.getListObs().subscribe(data=>this.arrBodyguards=data);
    this.bodyguardService.getList().subscribe(data=>this.arrBodyguards=data);
  }
  openShopDialog(idBodyguard:number) {
    let popup = this.dialog.open(ShopDialogComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {id:idBodyguard},
    });
    popup.afterClosed().subscribe((item) => {
      
    });
  }

}

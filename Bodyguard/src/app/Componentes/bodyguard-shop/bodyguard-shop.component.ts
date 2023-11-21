import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { BodyguardService } from 'src/app/Services/bodyguard.service';
import { ShopDialogComponent } from './shop-dialog/shop-dialog.component';

@Component({
  selector: 'app-bodyguard-shop',
  templateUrl: './bodyguard-shop.component.html',
  styleUrls: ['./bodyguard-shop.component.css'],
})
export class BodyguardShopComponent implements OnInit {
  arrBodyguards: Bodyguard[];
  originalBodyguards: Bodyguard[]=[];
  searchKey: string = '';
  public searchTerm!: string;
  constructor(
    private dialog: MatDialog,
    private bodyguardService: BodyguardService
  ) {
    this.arrBodyguards = [];
  }
  search(event: any): void {
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.bodyguardService.search.next(this.searchTerm);
  }

  ngOnInit(): void {

    this.bodyguardService.getList().subscribe((data) => {
      this.originalBodyguards = data;
      this.arrBodyguards = data;
      this.bodyguardService.setList(data);
      this.applyFilter(this.searchKey);
    });
    this.bodyguardService.getListObs().subscribe((data) => {
      this.arrBodyguards = data;
      this.applyFilter(this.searchKey);
    });
    this.bodyguardService.search.subscribe((value) => {
      this.searchKey = value;
      console.log('actualizandose searkey', this.searchKey);
       this.applyFilter(this.searchKey);
    });
  }
  applyFilter(filterString: string): void {
     if (filterString.trim()==="" || this.searchKey==="" ) {
      this.arrBodyguards =  this.originalBodyguards ;
      return;
    }
    this.arrBodyguards = this.transform(this.originalBodyguards, filterString);
  }
  openShopDialog(idBodyguard: number) {
    let popup = this.dialog.open(ShopDialogComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        idBody: idBodyguard,
      },
    });
    popup.afterClosed().subscribe((item) => {});
  }
  transform (array: any[], filterString: string): any[] {
    if (!array || array.length === 0) {
      return array;
    }

    if (filterString==="") {
      return array;
    }

    return array.filter(item => {
      const userName = item.user && item.user.name ? item.user.name.toLowerCase() : '';
      return userName.includes(filterString.toLowerCase());
    });
  }
}

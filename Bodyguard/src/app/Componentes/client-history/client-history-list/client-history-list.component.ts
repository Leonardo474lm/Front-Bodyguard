import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';
import { DeleteHistoryDialogComponent } from '../delete-history-dialog/delete-history-dialog.component';
import { ReviewHistoryDialogComponent } from '../review-history-dialog/review-history-dialog.component';

@Component({
  selector: 'app-client-history-list',
  templateUrl: './client-history-list.component.html',
  styleUrls: ['./client-history-list.component.css'],
})
export class ClientHistoryListComponent {
  displayedColumns = [
    'Monto',
    'date',
    'hours_start',
    'Duracion',
    'location',
    'bodyguards',
    'review',
    'st_anulado',
    'st_aceptar',
    'st_pagado',
    'Acciones',
  ];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private client: Client;
  private localUser: User;
  private rev:number=0;
  constructor(
    private iService: iServiceService,
    private userServ: UserService,
    private clientServ: ClientService,
    private dialog: MatDialog
  ) {
    this.client = new Client();
    const user = localStorage.getItem('userProfile');
    this.localUser = user ? JSON.parse(user) : new User();
    this.loadList();
  }

  ngOnInit(): void {
    this.userServ.getByEmail(this.localUser.email).subscribe((resp) => {
      this.clientServ.getByUserId(resp.id).subscribe((data) => {
        this.client = data;
        this.iService.getClientHistory(data.id).subscribe((data2) => {
          this.dataSource.data = data2;
        });
      });
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadList() {
    this.iService
      .getClientHistory(this.client.id)
      .subscribe((data) => (this.dataSource.data = data));

    this.iService
      .getClientHistoryList()
      .subscribe((data) => (this.dataSource.data = data));
  }
  openDeleteDialog(id: number) {
    const poup = this.dialog.open(DeleteHistoryDialogComponent);
    poup.afterClosed().subscribe((resp) => {
      if (resp) this.deleteService(id);
    });
  }
  deleteService(id: number) {
    this.iService.delete(id).subscribe(() => {
      this.iService.getClientHistory(this.client.id).subscribe((data) => {
        this.iService.setClientHistoryList(data);
      });
    });
  }

  openReviewDialog(id:number){
    const review = this.dialog.open(ReviewHistoryDialogComponent);
    review.afterClosed().subscribe(resp=>{
       console.log(resp[0])
      if(resp[0]) {
        this.rev=resp[0];
        this.iService.listById(id).subscribe(resp=>{
          resp.review= this.rev;
           
          this.iService.update(resp).subscribe(()=>{
            
            this.iService.getClientHistory(this.client.id).subscribe((data) => {
              this.iService.setClientHistoryList(data);
            });
          });
          
        })


        //actualizar review del servicio por parte del cliente
      }
    })

  }


}

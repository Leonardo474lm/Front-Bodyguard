import { Component, OnInit, ViewChild, numberAttribute } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { Service } from 'src/app/Model/service';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-serv-client-listar',
  templateUrl: './serv-client-listar.component.html',
  styleUrls: ['./serv-client-listar.component.css']
})
export class ServClientListarComponent implements OnInit {

  displayedColumns = [
    'Monto',
    'date',
    'hours_start',
    'Duracion',
    'location',
    'bodyguards',
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

  constructor(
    private iService: iServiceService,
    private userServ: UserService,
    private clientServ: ClientService,

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
        this.iService.getClientServices(data.id).subscribe((data2) => {
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
      .getClientServices(this.client.id)
      .subscribe((data) => (this.dataSource.data = data));

    this.iService
      .getClientServicesList()
      .subscribe((data) => (this.dataSource.data = data));
  }
  anularServicio(idServ:number){
    this.iService.listById(idServ).subscribe((service)=>{
      service.st_anulado=true;
      this.iService.update(service).subscribe(()=>{
        this.iService.getClientServices(this.client.id).subscribe(resp=>{
          this.iService.setClientServicesList(resp);
        })
      })
    })
  }



















  // openDeleteDialog(id: number) {
  //   const poup = this.dialog.open(DeleteHistoryDialogComponent);
  //   poup.afterClosed().subscribe((resp) => {
  //     if (resp) this.deleteService(id);
  //   });
  // }
  // deleteService(id: number) {
  //   this.iService.delete(id).subscribe(() => {
  //     this.iService.getClientHistory(this.client.id).subscribe((data) => {
  //       this.iService.setClientHistoryList(data);
  //     });
  //   });
  // }

  // openReviewDialog(id:number){
  //   const review = this.dialog.open(ReviewHistoryDialogComponent);
  //   review.afterClosed().subscribe(resp=>{
  //      console.log(resp[0])
  //     if(resp[0]) {
  //       this.rev=resp[0];
  //       this.iService.listById(id).subscribe(resp=>{
  //         resp.review= this.rev;

  //         this.iService.update(resp).subscribe(()=>{

  //           this.iService.getClientHistory(this.client.id).subscribe((data) => {
  //             this.iService.setClientHistoryList(data);
  //           });
  //         });

  //       })
  //       //actualizar review del servicio por parte del cliente
  //     }
  //   })

  // }

}

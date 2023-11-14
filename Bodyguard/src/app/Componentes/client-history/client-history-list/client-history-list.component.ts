import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-client-history-list',
  templateUrl: './client-history-list.component.html',
  styleUrls: ['./client-history-list.component.css']
})
export class ClientHistoryListComponent {
  displayedColumns = ['Monto', 'date', 'hours_start','Duracion','location','bodyguards','review','st_anulado','st_aceptar','st_pagado' ,'Acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private client:Client;
  private localUser:User;
  constructor(
    private iService:iServiceService,
    private userServ:UserService,
    private clientServ:ClientService,

  ) {
    this.client = new Client();
    const user = localStorage.getItem("userProfile");
    this.localUser = user?JSON.parse(user):new User();
    this.loadList();
  }

  ngOnInit(): void {
    this.userServ.getByEmail(this.localUser.email).subscribe(resp=>{
      this.clientServ.getByUserId(resp.id).subscribe(data=>{
        // this.client=data;
        this.iService.getClientHistory(data.id).subscribe(data2=>{
          this.dataSource.data=data2;
        })
      })
    })


  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadList() {

    // this.iService.getClientHistory(this.client.id).subscribe(data=>{this.dataSource.data=data  ; console.log("servicios",data);});
    // this.iService.getClientHistoryList().subscribe(data=>this.dataSource.data=data);


  }




}

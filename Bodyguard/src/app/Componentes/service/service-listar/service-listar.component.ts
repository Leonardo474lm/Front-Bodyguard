import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';
import { ServiceEditarComponent } from '../service-editar/service-editar.component';
import { MatDialog } from '@angular/material/dialog';
import { Client } from 'src/app/Model/client';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-service-listar',
  templateUrl: './service-listar.component.html',
  styleUrls: ['./service-listar.component.css'],
})
export class ServiceListarComponent implements OnInit {
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
    private clientServ: ClientService
  ) {
    this.client = new Client();
    const user = localStorage.getItem('userProfile');
    this.localUser = user ? JSON.parse(user) : new User();
    this.loadList();
  }

  ngOnInit(): void {
    this.iService.getAdminServices().subscribe((data2) => {
      this.dataSource.data = data2;
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  loadList() {
    this.iService
      .getAdminServices()
      .subscribe((data) => (this.dataSource.data = data));

    this.iService
      .getAdminServicesList()
      .subscribe((data) => (this.dataSource.data = data));
  }
  activarServicio(idServ: number) {
    this.iService.listById(idServ).subscribe((service) => {
      service.st_pagado = true;
      this.iService.update(service).subscribe(() => {
        this.iService.getAdminServices().subscribe((resp) => {
          this.iService.setAdminServicesList(resp);
        });
      });
    });
  }
}

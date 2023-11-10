import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-serv-client-listar',
  templateUrl: './serv-client-listar.component.html',
  styleUrls: ['./serv-client-listar.component.css']
})
export class ServClientListarComponent implements OnInit {
  Localuser: User = new User;
  user: User = new User;
  lista: Service[] = [];
  displayedColumns = ['monto', 'datee', 'hours_start', 'location', 'body', 'st_pagado', 'st_anulado'];

  dataSource = new MatTableDataSource<Service>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private serviceservi: iServiceService,
    private userService: UserService) {

    this.serviceservi.ListServiceUser(this.user.id).subscribe(data => this.dataSource.data = data);
  }
  ngOnInit(): void {
    const store = localStorage.getItem('userProfile');
    if (store) {
      this.user = JSON.parse(store) as User;
      this.userService.getByEmail(this.user.email).subscribe((user1) => {
        this.user = user1;
        console.log(this.user);

        // Mover la carga de datos aquí
        this.serviceservi.ListServiceUser(this.user.id).subscribe(data => {
          console.log('Data from ListServiceUser:', data);
          this.dataSource.data = data;
        });
      });
    }
  }
  ngAfterViewInit() {
    console.log(this.lista)

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  //esto es para transformar un number a formato hora xd
  formatHours(value: number): string {
    const hours = Math.floor(value);
    const minutes = value % 1;
    return `${hours}:${minutes < 10 ? '0' : ''}${minutes}`;
  }

}

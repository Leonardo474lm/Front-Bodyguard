import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-serv-body-listar',
  templateUrl: './serv-body-listar.component.html',
  styleUrls: ['./serv-body-listar.component.css']
})
export class ServBodyListarComponent implements OnInit{
  Localuser: User = new User;
  user: User = new User;
  lista: Bodyguard[] = [];
  displayedColumns = ['monto', 'date', 'hours_start', 'location', 'client', 'st_pagado', 'calificacion'];

  dataSource = new MatTableDataSource<Service>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private serviceservi: iServiceService,
    private userService: UserService) {

    this.serviceservi.ListServiceBodyguard(this.user.id).subscribe(data => this.dataSource.data = data);
  }
  ngOnInit(): void {
    const store = localStorage.getItem('userProfile');
    if (store) {
      this.user = JSON.parse(store) as User;
      this.userService.getByEmail(this.user.email).subscribe((user1) => {
        this.user = user1;
        console.log(this.user);

        // Mover la carga de datos aquí
        this.serviceservi.ListServiceBodyguard(this.user.id).subscribe(data => {
          console.log('Data from ListServiceBodyguard:', data);
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

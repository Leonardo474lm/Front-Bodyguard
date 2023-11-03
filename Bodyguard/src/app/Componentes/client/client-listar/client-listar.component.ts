import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
@Component({
  selector: 'app-client-listar',
  templateUrl: './client-listar.component.html',
  styleUrls: ['./client-listar.component.css']
})
export class ClientListarComponent {
  lista: Client[] = [];
  displayedColumns = ['id', 'dni', 'name', 'lastname', 'email', 'fech_nac', 'gender', 'phone', 'password', 'age','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;
  constructor(private clientservice: ClientService) {
    this.clientservice.list().subscribe(data => this.dataSource.data = data);
    this.clientservice.getList().subscribe(data => {
      this.dataSource.data = data;
      
    });
  }

  ngOnInit(): void {
    this.clientservice.list().subscribe(data => this.dataSource.data = data);
    this.clientservice.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }
  ngAfterViewInit() {
   console.log(this.lista)

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

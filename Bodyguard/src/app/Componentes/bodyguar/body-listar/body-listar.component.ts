import { Bodyguard } from './../../../Model/bodyguard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BodyguardService } from './../../../Services/bodyguard.service';

@Component({
  selector: 'app-body-listar',
  templateUrl: './body-listar.component.html',
  styleUrls: ['./body-listar.component.css']
})
export class BodyListarComponent implements OnInit {
  lista: Bodyguard[] = [];
  displayedColumns = [ 'id', 'name_user', 'email', 'name_specialization', 'actions' ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sbodyguard: BodyguardService) {
    this.sbodyguard.list().subscribe(data => this.dataSource.data = data);
   this.sbodyguard.getList().subscribe(data => {
     this.dataSource.data = data;
   });
 }

 ngOnInit(): void {
  this.sbodyguard.list().subscribe(data => this.dataSource.data = data);
    this.sbodyguard.getList().subscribe(data => {
      this.dataSource.data = data;
    });
 }

 ngAfterViewInit() {
   this.dataSource.sort = this.sort;
   this.dataSource.paginator = this.paginator;
 }
 
}

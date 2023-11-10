import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';
import { ServiceEditarComponent } from '../service-editar/service-editar.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-service-listar',
  templateUrl: './service-listar.component.html',
  styleUrls: ['./service-listar.component.css']
})
export class ServiceListarComponent implements OnInit {
  lista: Service[] = [];

  //'clients','bodyguards','review','payment_method',
  displayedColumns = ['id', 'date','hours_start','location','st_aceptar','st_pagado','st_anulado','actions01','actions02'];

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private iserviceService: iServiceService ,
    private dialog: MatDialog
    ) {
     this.iserviceService.list().subscribe(data => this.dataSource.data = data);

    this.iserviceService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
    this.loadList();

  }

  ngOnInit(): void {
    this.iserviceService.list().subscribe(data => this.dataSource.data = data);
    this.iserviceService.getList().subscribe(data => {
      this.dataSource.data = data;
      
      
    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openFormDialog(id:number,title:string) {
    let popup = this.dialog.open(ServiceEditarComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: title,
        id:id
      },
    });
    popup.afterClosed().subscribe((item) => {
      this.loadList();
    });
  }
  loadList() {
    this.iserviceService.list().subscribe((data) => (this.dataSource.data = data));
    this.iserviceService.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }
  editService(id:number){
    console.log(id);
    this.openFormDialog(id,'Editar servicio')

  }

   /*addSpecialization()
  {
    this.openFormDialog(0,'Agregar especialidad');
  }


 openDeleteDialog(id:number){
    const dialogRef = this.dialog.open(DeleteDialogComponent);
    dialogRef.afterClosed().subscribe(result =>{
      if(result){
        this.delete(id);
      }else{
        console.log("FALSE");
      }
    });
  }*/
}

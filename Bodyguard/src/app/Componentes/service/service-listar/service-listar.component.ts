import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';

@Component({
  selector: 'app-service-listar',
  templateUrl: './service-listar.component.html',
  styleUrls: ['./service-listar.component.css']
})
export class ServiceListarComponent implements OnInit {
  lista: Service[] = [];
  displayedColumns = ['id', 'date', 'hours_start', 'location', 'clients', 'bodyguards', 'review', 'payment_method', 'st_aceptar', 'st_pagado', 'st_anulado', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private iserviceService: iServiceService) {
    this.iserviceService.list().subscribe(data => this.dataSource.data = data);
    this.iserviceService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
    this.iserviceService.list().subscribe(data => this.dataSource.data = data);
    this.iserviceService.getList().subscribe(data => {
      this.dataSource.data = data;
      // Supongamos que 'precio' es la variable que contiene tu valor numérico
      let precio = 44;

      // Formatear el precio como una cadena con formato de moneda
      let precioFormateado = precio.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' });

      console.log(precioFormateado); // Mostrará "€1,234.56" (o el símbolo de moneda correspondiente en tu configuración regional)

    });
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

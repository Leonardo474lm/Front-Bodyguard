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
  displayedColumns = ['id', 'date','name','hours_start','description','status','actions'];
  dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  constructor(private iserviceService: iServiceService) {
     this.iserviceService.list().subscribe(data => this.dataSource.data = data);
    this.iserviceService.getList().subscribe(data => {
      this.dataSource.data = data;
    });
  }

  ngOnInit(): void {
    this.iserviceService.list().subscribe(data => this.dataSource.data = data);

  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
}

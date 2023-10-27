import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Specialization } from 'src/app/Model/specialization';
import { SpecializationComponent } from '../specialization.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';

@Component({
  selector: 'app-specialization-listar',
  templateUrl: './specialization-listar.component.html',
  styleUrls: ['./specialization-listar.component.css']
})
export class SpecializationListarComponent implements OnInit {
  lista: Specialization[] = [];
  displayedColumns = ['id', 'name','description'];
  dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  constructor(private Sspecializationservice: SpecializationService) {
    console.log("Load Constructor");
  }

  ngOnInit(): void {
    //this.Sspecializationservice.list().subscribe(data => this.dataSource.data = data);

  }
  ngAfterViewInit() {
  //  this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
  }
}

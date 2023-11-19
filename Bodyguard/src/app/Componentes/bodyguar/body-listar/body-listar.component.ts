import { Bodyguard } from '../../../Model/bodyguard';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { BodyguardService } from '../../../Services/bodyguard.service';
import { MatDialog } from '@angular/material/dialog';
import { BodyDialogComponent } from '../body-dialog/body-dialog.component';


@Component({
  selector: 'app-body-listar',
  templateUrl: './body-listar.component.html',
  styleUrls: ['./body-listar.component.css'],
})
export class BodyListarComponent implements OnInit {
  
 
  displayedColumns = [
    'id',
    'name_user',
    'email',
    'name_specialization'
  ];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private sbodyguard: BodyguardService, 
    private dialog: MatDialog,
   ) {
    this.loadList();
  }

  ngOnInit(): void {
    this.sbodyguard.list().subscribe((data) => (this.dataSource.data = data));
    this.sbodyguard.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
 

  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openFormDialog(title: string) {
    let popup = this.dialog.open(BodyDialogComponent, {
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: {
        title: title
      },
    });
    popup.afterClosed().subscribe((item) => {
      this.loadList();
    });
  }
  loadList() {
    this.sbodyguard.list().subscribe(data => this.dataSource.data = data);
    this.sbodyguard.getList().subscribe(data =>this.dataSource.data = data);
  }

  addBodyguard() {
    this.openFormDialog('Agregar bodyguard');
  }
}

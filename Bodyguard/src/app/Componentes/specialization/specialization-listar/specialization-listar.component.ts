import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Specialization } from 'src/app/Model/specialization';
import { SpecializationComponent } from '../specialization.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';
import { MatDialog } from '@angular/material/dialog';
import { SpecializationFormDialogComponent } from '../specialization-form-dialog/specialization-form-dialog.component';

@Component({
  selector: 'app-specialization-listar',
  templateUrl: './specialization-listar.component.html',
  styleUrls: ['./specialization-listar.component.css'],
})
export class SpecializationListarComponent implements OnInit {
  lista: Specialization[] = [];
  displayedColumns = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild('paginator') paginator!: MatPaginator;
  @ViewChild('MatSort') sort!: MatSort;

  constructor(
    private Sspecializationservice: SpecializationService,
    private dialog: MatDialog
  ) {
    //  this.Sspecializationservice.list().subscribe(data => this.dataSource.data = data);
    // this.Sspecializationservice.getList().subscribe(data => {
    //   this.dataSource.data = data;
    // });
    this.loadList();
  }

  ngOnInit(): void {
    this.Sspecializationservice.list().subscribe(
      (data) => (this.dataSource.data = data)
    );
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openDialog(id:number,title:string) {
    let popup = this.dialog.open(SpecializationFormDialogComponent, {
      width: '60%',
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
    this.Sspecializationservice.list().subscribe((data) => (this.dataSource.data = data));
    this.Sspecializationservice.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  editSpecialization(id:number){
    console.log(id);
    this.openDialog(id,'Edit specialization')

  }
  
  addSpecialization()
  {
    this.openDialog(0,'Add specialization');
  }

}

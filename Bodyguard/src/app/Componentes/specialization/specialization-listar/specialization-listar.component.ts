import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Specialization } from 'src/app/Model/specialization';
import { SpecializationComponent } from '../specialization.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';
import { MatDialog } from '@angular/material/dialog';
import { SpecializationFormDialogComponent } from '../specialization-form-dialog/specialization-form-dialog.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-specialization-listar',
  templateUrl: './specialization-listar.component.html',
  styleUrls: ['./specialization-listar.component.css'],
})
export class SpecializationListarComponent implements OnInit {
  lista: Specialization[] = [];
  displayedColumns = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private specialtyServ: SpecializationService,
    private dialog: MatDialog
  ) {
    this.loadList();
  }

  ngOnInit(): void {
    this.specialtyServ.list().subscribe(
      (data) => (this.dataSource.data = data)
    );
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openFormDialog(id:number,title:string) {
    let popup = this.dialog.open(SpecializationFormDialogComponent, {
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
    this.specialtyServ.list().subscribe((data) => (this.dataSource.data = data));
    this.specialtyServ.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  editSpecialization(id:number){
    console.log(id);
    this.openFormDialog(id,'Editar especialidad')

  }

  addSpecialization()
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
  }

  delete(id:number){
    this.specialtyServ.delete(id).subscribe(()=>{
      this.specialtyServ.list().subscribe(data=>{
        this.specialtyServ.setList(data);
      })
    });
  }

}

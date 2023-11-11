import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Payment } from 'src/app/Model/payment';
import { PaymentService } from 'src/app/Services/payment.service';
import { PaymentEditarComponent } from '../payment-editar/payment-editar.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-payment-listar',
  templateUrl: './payment-listar.component.html',
  styleUrls: ['./payment-listar.component.css']
})
export class PaymentListarComponent implements OnInit{
  lista: Payment[] = [];
  displayedColumns = ['id', 'methods', 'actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
  constructor(
    private paymentserivce: PaymentService,
    private dialog: MatDialog
  ) {
    
  }

  
  ngOnInit(): void {
    this.paymentserivce.list().subscribe(
      (data) => (this.dataSource.data = data)
    );
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  openFormDialog(id:number,title:string) {
    let popup = this.dialog.open(PaymentEditarComponent, {
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
    this.paymentserivce.list().subscribe((data) => (this.dataSource.data = data));
    this.paymentserivce.getList().subscribe((data) => {
      this.dataSource.data = data;
    });
  }

  editpayment(id:number){
    console.log(id);
    this.openFormDialog(id,'Editar payment')

  }

  addSpecialization()
  {
    this.openFormDialog(0,'Agregar payment');
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
    this.paymentserivce.delete(id).subscribe(()=>{
      this.paymentserivce.list().subscribe(data=>{
        this.paymentserivce.setList(data);
      })
    });
  }
}

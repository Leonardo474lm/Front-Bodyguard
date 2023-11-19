import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Payment } from 'src/app/Model/payment';
import { PaymentService } from 'src/app/Services/payment.service';

@Component({
  selector: 'app-payment-editar',
  templateUrl: './payment-editar.component.html',
  styleUrls: ['./payment-editar.component.css']
})
export class PaymentEditarComponent implements OnInit {
  inputData: any;
  editData: Payment=new Payment();
  form: FormGroup = new FormGroup({});
  editing: boolean=false;
  payment: Payment = new Payment();

  

  constructor(
    private ref: MatDialogRef<PaymentEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private paymentservice: PaymentService
  ) {
    this.editing = false;
    this.editData=new Payment();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      methods: new FormControl('', [Validators.required]),
      
    });

    this.inputData = this.data;
    if (this.inputData.id > 0) {
      this.setUpdateDialog(this.inputData.id);
    }
  }

  setUpdateDialog(id: number) {
    this.editing = true;
    if(this.editing){
      this.paymentservice.listById(id).subscribe((item) => {
         this.editData = item;
        this.form = new FormGroup({
          id: new FormControl(item.id),
          methods: new FormControl(item.methods),
         
        });
      });
      }
  }

  closeDialog() {
    this.ref.close();
  }

  enviar() {
    this.payment.id = this.form.value['id'];
    this.payment.methods = this.form.value['methods'];
    
    if (this.form.valid) {
      if (this.editing) {
        this.paymentservice.update(this.payment).subscribe(() => {
          this.closeDialog();
          this.paymentservice.list().subscribe((data) => {
            this.paymentservice.setList(data);
          });
        });
      } else {
        this.paymentservice.insert(this.payment).subscribe(() => {
          this.closeDialog();
          this.paymentservice.list().subscribe((data) => {
            this.paymentservice.setList(data);
          });
        });
      }
    }
  }
}

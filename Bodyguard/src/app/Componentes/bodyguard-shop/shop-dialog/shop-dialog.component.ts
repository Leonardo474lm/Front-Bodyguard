import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/app/Model/User';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { Client } from 'src/app/Model/client';
import { Payment } from 'src/app/Model/payment';
import { Service } from 'src/app/Model/service';
import { BodyguardService } from 'src/app/Services/bodyguard.service';
import { ClientService } from 'src/app/Services/client.service';
import { iServiceService } from 'src/app/Services/iService.service';
import { PaymentService } from 'src/app/Services/payment.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-shop-dialog',
  templateUrl: './shop-dialog.component.html',
  styleUrls: ['./shop-dialog.component.css'],
})
export class ShopDialogComponent implements OnInit {
  form: FormGroup;
  inputData: any;
  editBody: Bodyguard;
  idPaymentSelected: number;
  listPay: Payment[] = [];
  newService: Service;
  currentUser: User;
  localUser: User;
  currentClient: Client;
  newPayment: Payment;
  text: any;

  constructor(
    private ref: MatDialogRef <ShopDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bodyServ: BodyguardService,
    private iService: iServiceService,
    private userServ: UserService,
    private payServ: PaymentService,
    private clientServ: ClientService,

  ) {
    this.form = new FormGroup({});
    this.editBody = new Bodyguard();
    this.idPaymentSelected = 0;
    this.newService = new Service();
    this.currentUser = new User();
    this.localUser = new User();
    this.currentClient = new Client();
    this.newPayment = new Payment();

  }
  ngOnInit(): void {
    const u = localStorage.getItem('userProfile');
    if (u) this.localUser = JSON.parse(u) as User;

    this.userServ.getByEmail(this.localUser.email).subscribe((user1) => {
      this.currentUser = user1;
      this.clientServ.getByUserId(this.currentUser.id).subscribe((client) => {
        this.currentClient = client;
      });
    });

    this.payServ.list().subscribe((list) => (this.listPay = list));
    this.form = new FormGroup({
      location: new FormControl(),
      date: new FormControl(),
      hours_start: new FormControl(),
      hour: new FormControl(),
      specialty: new FormControl(),
      payment_method: new FormControl(),
    });

    this.inputData = this.data;
    if (this.inputData.idBody > 0) {
      this.loadDialog(this.inputData.idBody);
    }
  }

  loadDialog(idBody: number) {
    this.bodyServ.getById(idBody).subscribe((body) => {
      this.editBody = body; 
      console.log(body);
      console.log(body.specialization.name);
      this.form = new FormGroup({
        location: new FormControl(),
        date: new FormControl(),
        hours_start: new FormControl(),
        hour: new FormControl(),
        specialty: new FormControl(this.editBody.specialization.name),
        payment_method: new FormControl(),
      });
    });
  }

  submit() {
    this.newService.date = this.form.value['date'];
    this.newService.hours_start = this.form.value['hours_start']; //view-format
    this.newService.location = this.form.value['location'];
    this.newService.location = this.form.value['location'];

    if (this.form.valid) {
      this.newService.clients = this.currentClient;
      this.newService.bodyguards = this.editBody;
      this.newPayment.id = this.idPaymentSelected;
      this.newService.payment_method=this.newPayment;
      this.iService.insert(this.newService).subscribe(()=>{
        this.iService.list().subscribe(data=>this.iService.setList(data))
      })
      this.ref.close();
    }
  }
}

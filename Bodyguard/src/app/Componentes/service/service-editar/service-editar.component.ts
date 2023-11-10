import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Service } from 'src/app/Model/service';
import { iServiceService } from 'src/app/Services/iService.service';

@Component({
  selector: 'app-service-editar',
  templateUrl: './service-editar.component.html',
  styleUrls: ['./service-editar.component.css']
})
export class ServiceEditarComponent implements OnInit {
  inputData: any;
  editData: Service;
  form: FormGroup = new FormGroup({});
  editing: boolean;
  service: Service = new Service();


  constructor(
    private ref: MatDialogRef<ServiceEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private iserviceService: iServiceService
  ) {
    this.editing = false;
    this.editData=new Service();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      date: new FormControl('', [Validators.required]),
      hours_start: new FormControl('', [Validators.required]),
      location: new FormControl(),
      st_aceptar: new FormControl(),
      st_pagado: new FormControl(),
      st_anulado: new FormControl(),
      review: new FormControl(),
    });

    this.inputData = this.data;
    if (this.inputData.id > 0) {
      this.setUpdateDialog(this.inputData.id);
    }
  }

  setUpdateDialog(id: number) {
    this.editing = true;
    if(this.editing){
      this.iserviceService.listById(id).subscribe((item) => {
        console.log(item)
         this.editData = item;
        this.form = new FormGroup({
          id: new FormControl(item.id),
          date: new FormControl(item.date),
          hours_start: new FormControl(item.hours_start),
          location: new FormControl(item.location),
          st_aceptar: new FormControl(item.st_aceptar),
          st_pagado: new FormControl(item.st_pagado),
          st_anulado: new FormControl(item.st_anulado),
          review: new FormControl(item.review),
        });
      });
      }
  }

  closeDialog() {
    this.ref.close();
  }

  enviar() {
    console.log(this.service)
    this.service.id = this.form.value['id'];
    this.service.date = this.form.value['date'];
    this.service.hours_start = this.form.value['hours_start'];
    this.service.location = this.form.value['location'];
    this.service.st_aceptar = this.form.value['st_aceptar'];
    this.service.st_pagado = this.form.value['st_pagado'];
    this.service.st_anulado = this.form.value['st_anulado'];
    this.service.review = this.form.value['review'];

    
    

    if (this.form.valid) {
      if (this.editing) {
        this.iserviceService.update(this.service).subscribe(() => {
          console.log(this.service)
          this.closeDialog();
          this.iserviceService.list().subscribe((data) => {
            this.iserviceService.setList(data);
          });
        });
      } else {
        this.iserviceService.insert(this.service).subscribe(() => {
          this.closeDialog();
          this.iserviceService.list().subscribe((data) => {
            this.iserviceService.setList(data);
          });
        });
      }
    }
  }
}
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ActivatedRoute, Params, Router } from '@angular/router';

import { Body } from 'src/app/Model/Body';

import { Specialization } from 'src/app/Model/specialization';
import { UserBody } from 'src/app/Model/userBody';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';
import { BodyguardService } from 'src/app/Services/bodyguard.service';

@Component({
  selector: 'app-body-dialog',
  templateUrl: './body-dialog.component.html',
  styleUrls: ['./body-dialog.component.css']
})
export class BodyDialogComponent {
  inputData: any;

  form: FormGroup = new FormGroup({});
  editing: boolean;
  bodyguard: Body = new Body();
  user: UserBody  = new UserBody();
  specialty: Specialization = new Specialization();
  value:String="";
  listaSpecialty:  Specialization[] = [];
  idSpecSelected:number=0;


  constructor(
    private ref: MatDialogRef<BodyDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private bodyService: BodyguardService,
    private speServ:SpecializationService,
  ) {
    this.editing = false;
  }

  ngOnInit(): void {
    this.form = new FormGroup({

      price_per_hour: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      dni: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      fech_nac: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      specialization: new FormControl(),
      district: new FormControl('', [Validators.required]),

    });

    this.inputData = this.data;
    this.speServ.list().subscribe((data)=>{
      this.listaSpecialty=data;
    })
  }
 


  closeDialog() {
    this.ref.close();
  }

  enviar() {



    this.bodyguard.price_per_hour = this.form.value['price_per_hour']

    this.bodyguard.st_activo = true;
    this.bodyguard.user.dni = this.form.value['dni'];
    this.bodyguard.user.email = this.form.value['email'];

    this.user.email = this.form.value['email'];
    this.user.dni = this.form.value['dni'];
    this.user.name = this.form.value['name'];
    this.user.lastname = this.form.value['lastname'];
    this.user.fech_nac = this.form.value['fech_nac'];
    this.user.gender = this.form.value['gender'];
    this.user.phone = this.form.value['phone'];
    this.user.password = this.form.value['password'];
    this.user.age = this.form.value['age'];
    this.bodyguard.user = this.user;
    this.bodyguard.specialization.id = this.idSpecSelected;
    this.bodyguard.district = this.form.value['district'];

    console.log("body form",this.bodyguard)
    //esto se agrega para guardar los datos de specializacion listado
    if (this.idSpecSelected > 0) {
      let spec = new Specialization();
      spec.id = this.idSpecSelected;
      this.bodyguard.specialization = spec;
    }

      
    if (this.form.valid) {
        console.log("body to send",this.bodyguard)
        this.bodyService.insertByAdmin(this.bodyguard).subscribe(() => {
          this.closeDialog();
          this.bodyService.list().subscribe((data) => {
            this.bodyService.setList(data);
          });
        });
      
    }

  }



}

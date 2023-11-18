import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Bodyguard } from 'src/app/Model/bodyguard';
import { Specialization } from 'src/app/Model/specialization';
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
  bodyguard: Bodyguard = new Bodyguard();
  user: User = new User();
  specialization: Specialization = new Specialization();
  value: String = "";
  iduser: number = 0

  constructor(
    private ref: MatDialogRef<BodyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private bodyService: BodyguardService
  ) {
    this.editing = false;

  }
  ngOnInit(): void {
    this.form = new FormGroup({
   
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

  }


  closeDialog() {
    this.ref.close();
  }

  enviar() {


    this.bodyguard.price_per_hour = 0
    this.bodyguard.st_activo = true;
    this.bodyguard.user.dni = this.form.value['dni'];
    this.bodyguard.user.email = this.form.value['email'];

    this.bodyguard.user.name = this.form.value['name'];
    this.bodyguard.user.lastname = this.form.value['lastname'];
    this.bodyguard.user.fech_nac = this.form.value['fech_nac'];
    this.bodyguard.user.gender = this.form.value['gender'];
    this.bodyguard.user.phone = this.form.value['phone'];
    this.bodyguard.user.password = this.form.value['password'];
    this.bodyguard.user.age = this.form.value['age'];


    this.bodyguard.specialization = this.form.value['specialization'];
    this.bodyguard.district = this.form.value['district'];
    this.bodyguard.star = 0


    this.bodyService.insert(this.bodyguard).subscribe(() => {
      this.closeDialog();
      this.bodyService.list().subscribe((data) => {
        this.bodyService.setList(data);
      });
    });

    console.log(this.bodyguard)
    
  }



}

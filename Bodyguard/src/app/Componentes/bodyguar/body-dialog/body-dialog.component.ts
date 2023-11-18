import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
  editData: Bodyguard;
  form: FormGroup = new FormGroup({});
  editing: boolean;
  bodyguard: Bodyguard = new Bodyguard();
  user: User = new User();
  specialty: Specialization = new Specialization();
  value:String="";


  constructor(
    private ref: MatDialogRef<BodyDialogComponent>,
    @Inject (MAT_DIALOG_DATA) public data: any,
    private bodyService: BodyguardService
  ) {
    this.editing = false;
    this.editData=new Bodyguard();
  }

//     id: number = 0;
//     price_per_hour: number = 0
//     st_activo: boolean = false
//     user: User = new User()
//     specialization: Specialization = new Specialization()
//     district:string=""
//     star:number=0

    // USER
    // id: number=0;
    // email: string = "";
    // dni: string = "";
    // name: string = "";
    // lastname: string = "";
    // fech_nac:Date = new Date(Date.now());
    // gender: string = "";
    // phone: string = "";
    // password: string = "";
    // age: number=0;
  ngOnInit(): void {
    this.form = new FormGroup({

      price_per_hour: new FormControl('', [Validators.required]),
      // st_activo: new FormControl('', [Validators.required]),

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
    if (this.inputData.id > 0) {
      this.setUpdateDialog(this.inputData.id);
    }
  }

  setUpdateDialog(id: number) {
    // this.editing = true;
    // if(this.editing){
    //   this.bodyService.listById(id).subscribe((item) => {
    //     console.log(item)
    //      this.editData = item;
    //     this.form = new FormGroup({
    //       id: new FormControl(item.id),
    //       name: new FormControl(item.name),
    //       description: new FormControl(item.description)
    //     });
    //   });
    //   }
  }

  closeDialog() {
    this.ref.close();
  }

  enviar() {
    //     id: number = 0;
//     price_per_hour: number = 0
//     st_activo: boolean = false
//     user: User = new User()
//     specialization: Specialization = new Specialization()
//     district:string=""
//     star:number=0

  // email: string = "";
    // dni: string = "";
    // name: string = "";
    // lastname: string = "";
    // fech_nac:Date = new Date(Date.now());
    // gender: string = "";
    // phone: string = "";
    // password: string = "";
    // age: number=0;


    this.bodyguard.price_per_hour = this.form.value['price_per_hour'];
    this.bodyguard.st_activo = true;

    this.user.dni = this.form.value['dni'];
    this.user.name = this.form.value['name'];
    this.user.lastname = this.form.value['lastname'];
    this.user.fech_nac = this.form.value['fech_nac'];
    this.user.gender = this.form.value['gender'];
    this.user.phone = this.form.value['phone'];
    this.user.password = this.form.value['password'];
    this.user.age = this.form.value['age'];

    this.bodyguard.user = this.user;

    this.specialty.id = this.form.value['specialty'];

    this.bodyguard.specialization=this.specialty;
    this.bodyguard.district = this.form.value['district'];

    if (this.form.valid) {
      if (this.editing) {
        // this.bodyService.update(this.bodyguard).subscribe(() => {
        //   this.closeDialog();
        //   this.bodyService.list().subscribe((data) => {
        //     this.bodyService.setList(data);
        //   });
        // });
      } else {
        this.bodyService.insert(this.bodyguard).subscribe(() => {
          this.closeDialog();
          this.bodyService.list().subscribe((data) => {
            this.bodyService.setList(data);
          });
        });
      }
    }
  }

}

import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Specialization } from 'src/app/Model/specialization';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';

@Component({
  selector: 'app-specialization-form-dialog',
  templateUrl: './specialization-form-dialog.component.html',
  styleUrls: ['./specialization-form-dialog.component.css'],
})
export class SpecializationFormDialogComponent implements OnInit {
  inputData: any;
  editData: Specialization;
  form: FormGroup = new FormGroup({});
  editing: boolean;
  specialization: Specialization = new Specialization();


  constructor(
    private ref: MatDialogRef<SpecializationFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private specService: SpecializationService
  ) {
    this.editing = false;
    this.editData=new Specialization();
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.inputData = this.data;
    if (this.inputData.id > 0) {
      this.setUpdateDialog(this.inputData.id);
    }
  }

  setUpdateDialog(id: number) {
    this.editing = true;
    if(this.editing){
      this.specService.listById(id).subscribe((item) => {
        console.log(item)
         this.editData = item;
        this.form = new FormGroup({
          id: new FormControl(item.id),
          name: new FormControl(item.name),
          description: new FormControl(item.description)
        });
      });
      }
  }

  closeDialog() {
    this.ref.close();
  }

  enviar() {
    this.specialization.id = this.form.value['id'];
    this.specialization.name = this.form.value['name'];
    this.specialization.description = this.form.value['description'];
    if (this.form.valid) {
      if (this.editing) {
        this.specService.update(this.specialization).subscribe(() => {
          this.closeDialog();
          this.specService.list().subscribe((data) => {
            this.specService.setList(data);
          });
        });
      } else {
        this.specService.insert(this.specialization).subscribe(() => {
          this.closeDialog();
          this.specService.list().subscribe((data) => {
            this.specService.setList(data);
          });
        });
      }
    }
  }
}


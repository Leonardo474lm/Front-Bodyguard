import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Specialization } from 'src/app/Model/specialization';
import * as moment from 'moment';
import { SpecializationService } from 'src/app/Services/Sspecialization.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-specialization-editar',
  templateUrl: './specialization-editar.component.html',
  styleUrls: ['./specialization-editar.component.css']
})
export class SpecializationEditarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  specialization: Specialization = new Specialization();
  mensaje: string = '';
  maxFecha: Date = moment().add(1, 'days').toDate();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private specializationServ: SpecializationService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  //  id: number = 0;
  //   name: string = "";
  //   description:string = "";

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;
      this.init();
      console.log(this.id)

    });
    this.form = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])

    });

  }
  init() {
    if (this.edicion) {
      this.specializationServ.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          name: new FormControl(data.name),
          description: new FormControl(data.description)
        });
        console.log(data)

      });
      
    }
  }


  aceptar() {
    this.specialization.id = this.form.value['id'];
    this.specialization.name = this.form.value['name'];
    this.specialization.description = this.form.value['description'];

    if (this.form.valid) {
      if (this.edicion) {
        console.log(this.specialization);
        this.specializationServ.update(this.specialization).subscribe(() => {
          this.specializationServ.list().subscribe(data => {
            this.specializationServ.setList(data);
          })
        })
       

      }
    } else {
      console.log(this.specialization);
      this.specializationServ.insert(this.specialization).subscribe(() => {
        this.specializationServ.list().subscribe(data => {
          this.specializationServ.setList(data);
        })
      });
      
    }
    console.log(this.specialization)
    this.router.navigate(['/bodyguard/pages/specialization']);

  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';
import * as moment from 'moment';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-client-editar',
  templateUrl: './client-editar.component.html',
  styleUrls: ['./client-editar.component.css']
})
export class ClientEditarComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  client: Client = new Client();
  mensaje: string = '';
  id: number = 0;
  edicion: boolean = false;
  maxFecha: Date = moment().add(1, 'days').toDate();
  listaUser: User[] = [];
  user: User = new User();
  constructor(private clientservice: ClientService,
    private router: Router,
    private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      this.edicion = data['id'] != null;//true, false
      this.init();
      console.log(this.id)
    });


    //

    this.form = new FormGroup({
      id: new FormControl(),
      dni: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      fech_nac: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),

    })

  

  }
  init() {

    if (this.edicion) {
      this.clientservice.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          id: new FormControl(data.id),
          dni: new FormControl(data.user.dni),
          name: new FormControl(data.user.name),
          lastname: new FormControl(data.user.lastname),
          email: new FormControl(data.user.email),
          fech_nac: new FormControl(data.user.fech_nac),
          gender: new FormControl(data.user.gender),
          phone: new FormControl(data.user.phone),
          age: new FormControl(data.user.age),
          password: new FormControl(data.user.password),

        });
        console.log(data)
      });
    } //del if
  } // del in

  aceptar() {
    this.client.id = this.form.value['id'];
    this.client.user.dni = this.form.value['dni'];
    this.client.user.name = this.form.value['name'];
    this.client.user.lastname = this.form.value['lastname'];
    this.client.user.email = this.form.value['email'];
    this.client.user.fech_nac = this.form.value['fech_nac'];
    this.client.user.gender = this.form.value['gender'];
    this.client.user.phone = this.form.value['phone'];
    this.client.user.age = this.form.value['age'];
    this.client.user.password = this.form.value['password'];


    //agregado al editar  
    if (this.form.valid) {
      if (this.edicion) {
        console.log(this.client);//se ve en la herramienta de desarrollador de Chrome
        this.clientservice.update(this.client).subscribe((data) => {
          this.clientservice.list().subscribe(data => {
            this.clientservice.setList(data);//enviando la lista al suscriptor
          })
        })
      console.log(this.client)

      }
      else {
        console.log(this.clientservice);//se ve en la herramienta de desarrollador de Chrome
        this.clientservice.insert(this.client).subscribe((data) => {
          this.clientservice.list().subscribe(data => {
            this.clientservice.setList(data);//enviando la lista al suscriptor
          })
        })
      }
      console.log(this.client)
      this.router.navigate(['/navar/pages/client/lista']);
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }
}

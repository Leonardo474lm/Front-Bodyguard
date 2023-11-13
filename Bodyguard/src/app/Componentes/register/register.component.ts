import { Component, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { ClientService } from 'src/app/Services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  value: string = "";
  role: string = ""
  hide = true;
  showLogin = true;
  client: Client = new Client()

  form: FormGroup = new FormGroup({});
  id: number = 0
  mensaje: string = '';


  constructor(private clientservice: ClientService,
    private router: Router,
    public route: ActivatedRoute,
    private renderer: Renderer2, private el: ElementRef
  ) {

  }
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      console.log("id",this.id)
    });

    this.form = new FormGroup({

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

      console.log(this.clientservice);//se ve en la herramienta de desarrollador de Chrome
      this.clientservice.insert(this.client).subscribe((data) => {
        this.clientservice.list().subscribe(data => {
          this.clientservice.setList(data);//enviando la lista al suscriptor
        })
      })

      console.log(this.client)
      this.router.navigate(['']);
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }

  onSelect(value:string){
    console.log("on select",value)
  }

}

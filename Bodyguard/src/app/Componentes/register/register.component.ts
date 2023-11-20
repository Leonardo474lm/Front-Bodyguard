import { Component, ElementRef, OnChanges, OnInit, Renderer2 } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { Client } from 'src/app/Model/client';
import { Role } from 'src/app/Model/role';
import { ClientService } from 'src/app/Services/client.service';
import { RoleService } from 'src/app/Services/role.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  value: string = "";
  role: Role = new Role()
  useraux: User = new User();
  hide = true;
  showLogin = true;
  client: Client = new Client()

  form: FormGroup = new FormGroup({});
  id: number = 0
  mensaje: string = '';


  constructor(private clientservice: ClientService,
    private router: Router,
    public route: ActivatedRoute,
    private renderer: Renderer2, private el: ElementRef, private roless: RoleService, private userservice: UserService
  ) {

  }
  ngOnInit(): void {

    this.route.params.subscribe((data: Params) => {
      this.id = data['id']; //capturando el id del listado
      // console.log("id", this.id)
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


    this.client.user.dni = this.form.value['dni'];
    this.client.user.name = this.form.value['name'];
    this.client.user.lastname = this.form.value['lastname'];
    this.client.user.email = this.form.value['email'];
    this.client.user.fech_nac = this.form.value['fech_nac'];
    this.client.user.gender = this.form.value['gender'];
    this.client.user.phone = this.form.value['phone'];
    this.client.user.age = this.form.value['age'];
    this.client.user.password = this.form.value['password'];



    // ... tu código previo

    if (this.form.valid) {
      // Insertar el cliente
      this.clientservice.insert(this.client).subscribe((data) => {
        this.clientservice.list().subscribe(data => {
          this.clientservice.setList(data);//enviando la lista al suscriptor

          this.userservice.getByEmail(this.client.user.email).subscribe((user) => {
            // Verificar si se encontró el usuario
            console.log(this.role)
            // Asignar valores al rol
            this.role.rol = "Cliente";
            this.role.user = user;
            console.log(user.id)
            console.log(this.role)

            // Insertar el rol
            this.roless.insertrole(this.role).subscribe((data) => {

            });

            // Continuar con cualquier lógica adicional aquí
            // this.router.navigate(['']);

          });
        });

        // Obtener el usuario por email

      });
    } else {
      this.mensaje = "Agregue campos omitidos";
    }
  }



  onSelect(value: string) {
    console.log("on select", value)
  }

}

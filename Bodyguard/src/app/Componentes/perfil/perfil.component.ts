import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  localUser:User;
  user: User;
  form: FormGroup;
  value: string = '';
  hide = true;

  maxFecha: Date = moment().add(1, 'days').toDate();

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    private userService: UserService
  ) {
    this.user = new User();
    this.localUser=new User();
    this.form = new FormGroup({
      email: new FormControl(''),
      dni: new FormControl(''),
      name: new FormControl(''),
      lastname: new FormControl(''),
      fech_nac: new FormControl(''),
      gender: new FormControl(''),
      phone: new FormControl(''),
      password: new FormControl(''),
      age: new FormControl(''),
    });
  }
  ngOnInit(): void {
    const store = localStorage.getItem('userProfile');
    if (store) {
      this.user = JSON.parse(store) as User;
      this.userService.getByEmail(this.user.email).subscribe((user1) => {
        this.user = user1;
        this.form = new FormGroup({
          email: new FormControl(this.user.email, [
            Validators.email,
            Validators.required,
          ]),
          dni: new FormControl(this.user.dni, [Validators.required]),
          name: new FormControl(this.user.name, [Validators.required]),
          lastname: new FormControl(this.user.lastname, [Validators.required]),
          fech_nac: new FormControl(this.user.fech_nac, [Validators.required]),
          gender: new FormControl(this.user.gender, [Validators.required]),
          phone: new FormControl(this.user.phone, [Validators.required]),
          password: new FormControl(this.user.password, [Validators.required]),
          age: new FormControl(this.user.age, [Validators.required]),
        });
      });
    } else {
      // data null
    }
  }
  update(): void {
    this.user.email = this.form.value['email'];
    this.user.dni = this.form.value['dni'];
    this.user.name = this.form.value['name'];
    this.user.lastname = this.form.value['lastname'];
    this.user.fech_nac = this.form.value['fech_nac'];
    this.user.gender = this.form.value['gender'];
    this.user.phone = this.form.value['phone'];
    this.user.password = this.form.value['password'];
    this.user.age = this.form.value['age'];

    if (this.form.valid) {
      console.log('Form para actulizar', this.user);
      this.userService.update(this.user).subscribe((data) => {
        this.userService.list().subscribe((data) => {
          this.userService.setList(data);
        });
      });
      this.localUser.email=this.user.email;
      localStorage.setItem("userProfile",JSON.stringify(this.localUser))
    } else {
      // this.message="Complete los campos obligatorios"
    }
  }
}

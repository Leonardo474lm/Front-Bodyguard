import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//component de service
import { ServiceListarComponent } from './Componentes/service/service-listar/service-listar.component';
import { ServiceEditarComponent } from './Componentes/service/service-editar/service-editar.component';
import { ServiceComponent } from './Componentes/service/service.component';
//component de bodyguard

import { BodyListarComponent } from './Componentes/bodyguar/body-listar/body-listar.component';
import { BodyEditarComponent } from './Componentes/bodyguar/body-editar/body-editar.component';
import { BodyguarComponent } from './Componentes/bodyguar/bodyguar.component';
//component de payment

import { PaymentComponent } from './Componentes/payment/payment.component';
//component de specialization
import { SpecializationComponent } from './Componentes/specialization/specialization.component';
import { SpecializationListarComponent } from './Componentes/specialization/specialization-listar/specialization-listar.component';
import { SpecializationEditarComponent } from './Componentes/specialization/specialization-editar/specialization-editar.component';
//component de cliente
import { ClientComponent } from './Componentes/client/client.component';
import { ClientListarComponent } from './Componentes/client/client-listar/client-listar.component';
import { ClientEditarComponent } from './Componentes/client/client-editar/client-editar.component';


//component de login

import { LoginComponent } from './Componentes/login/login.component';
//angular

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {NgIf} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatMenuModule} from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule} from '@angular/material/table';//add
import { MatPaginatorModule} from '@angular/material/paginator';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

import { PerfilComponent } from './Componentes/perfil/perfil.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyguarComponent,
    PaymentComponent,
    SpecializationComponent,
    LoginComponent,
    ServiceComponent,
    ClientComponent,
    ClientListarComponent,
    ClientEditarComponent,
    BodyListarComponent,
    BodyEditarComponent,
    ServiceListarComponent,
    ServiceEditarComponent,
    SpecializationListarComponent,
    SpecializationEditarComponent,
    NavbarComponent,
    PerfilComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    NgIf,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

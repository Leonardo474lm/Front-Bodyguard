import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

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
//component de cliente
import { ClientComponent } from './Componentes/client/client.component';
import { ClientListarComponent } from './Componentes/client/client-listar/client-listar.component';
import { ClientEditarComponent } from './Componentes/client/client-editar/client-editar.component';


//component de login

import { LoginComponent } from './Componentes/login/login.component';
//angular




import { NavbarComponent } from './Componentes/navbar/navbar.component';


import { PerfilComponent } from './Componentes/perfil/perfil.component';


import { RegisterComponent } from './Componentes/register/register.component';

import { MatNativeDateModule } from '@angular/material/core';
import { PageModule } from './Componentes/page.module';


import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEsPE from '@angular/common/locales/es-PE';
registerLocaleData(localeEsPE, 'es-PE');
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    MatNativeDateModule,
    PageModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-PE' }],
  bootstrap: [AppComponent]
})
export class AppModule { }

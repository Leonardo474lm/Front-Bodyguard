import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
import { ClientComponent } from './Componentes/client/client.component';
import { ClientListarComponent } from './Componentes/client/client-listar/client-listar.component';
import { ClientEditarComponent } from './Componentes/client/client-editar/client-editar.component';
import { BodyguarComponent } from './Componentes/bodyguar/bodyguar.component';
import { BodyListarComponent } from './Componentes/bodyguar/body-listar/body-listar.component';
import { BodyEditarComponent } from './Componentes/bodyguar/body-editar/body-editar.component';
import { ServiceComponent } from './Componentes/service/service.component';
import { ServiceListarComponent } from './Componentes/service/service-listar/service-listar.component';
import { ServiceEditarComponent } from './Componentes/service/service-editar/service-editar.component';
import { SpecializationComponent } from './Componentes/specialization/specialization.component';
import { SpecializationListarComponent } from './Componentes/specialization/specialization-listar/specialization-listar.component';
import { SpecializationEditarComponent } from './Componentes/specialization/specialization-editar/specialization-editar.component';
import { HomeComponent } from './Componentes/home/home.component';
import { PerfilComponent } from './Componentes/perfil/perfil.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';

const routes: Routes = [

//  path para elección de rol
  //path para clients
  { path: '', 
    redirectTo: 'login',
    pathMatch: 'prefix'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'navar',
    component:NavbarComponent
    
    
  },
  {
        
    path: 'client',
    component: ClientComponent,
    children: [
      {
        path: 'clientinsertar',
        component: ClientListarComponent,
      },
      {
        path: 'edicion/:id',
        component: ClientEditarComponent,
      },
    ],
    
  
  },
  {
    path:'home',
    component:HomeComponent
  },
  
   //path para bodyguar
   {
    path: 'bodyguard',
    component: BodyguarComponent,
    children: [
      {
        path: 'bodyinsertar',
        component: BodyListarComponent,
      },
      {
        path: 'edicion/:id',
        component: BodyEditarComponent,
      },
    ],

  },
  //path para service
  {
    path: 'service',
    component: ServiceComponent,
    children: [
      {
        path: 'bodyinsertar',
        component: ServiceListarComponent,
      },
      {
        path: 'edicion/:id',
        component: ServiceEditarComponent,
      },
    ],

  },
   //path para service
   {
    path: 'specialization',
    component: SpecializationComponent,
    children: [
      {
        path: 'specializationListar',
        component: SpecializationListarComponent,
      },
      {
        path: 'edicion/:id',
        component: SpecializationEditarComponent,
      },
    ],

  },
  {
    path: 'perfil',
    component:PerfilComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client/client.component';
import { ClientListarComponent } from './client/client-listar/client-listar.component';
import { ClientEditarComponent } from './client/client-editar/client-editar.component';
import { HomeComponent } from './home/home.component';
import { BodyguarComponent } from './bodyguar/bodyguar.component';
import { BodyListarComponent } from './bodyguar/body-listar/body-listar.component';
import { BodyEditarComponent } from './bodyguar/body-editar/body-editar.component';
import { ServiceComponent } from './service/service.component';
import { ServiceListarComponent } from './service/service-listar/service-listar.component';
import { ServiceEditarComponent } from './service/service-editar/service-editar.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BodyguardShopComponent } from './bodyguard-shop/bodyguard-shop.component';
import { ServClientListarComponent } from './client/serv-client-listar/serv-client-listar.component';
import { ServBodyListarComponent } from './bodyguar/serv-body-listar/serv-body-listar.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { ClientServicesComponent } from './client-services/client-services.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { BodyguardHomeComponent } from './bodyguard-home/bodyguard-home.component';
import { BodyguardServicesComponent } from './bodyguard-services/bodyguard-services.component';
import { BodyguardPeticionesComponent } from './bodyguard-peticiones/bodyguard-peticiones.component';

const routes: Routes = [
  //Administrador
  {
    path: 'admin',
    component: HomeComponent,
  },

  {
    path: 'admin/home',
    component: HomeComponent,
  },
  {
    path: 'admin/services',
    component: ServiceComponent,
    children: [
      {
        path: 'serviceinsert',
        component: ServiceEditarComponent,
      },
      {
        path: 'edicion/:id',
        component: ServiceEditarComponent,
      },
    ],
  },
  {
    path: 'admin/bodyguard',
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
      {
        path: 'listarServicios',
        component: ServBodyListarComponent,
      },
    ],
  },
  {
    path: 'admin/specialty',
    component: SpecializationComponent,
  },
  {
    path: 'admin/client',
    component: ClientComponent,
    children: [
      {
        path: 'lista',
        component: ClientListarComponent,
      },
      {
        path: 'clientinsertar',
        component: ClientEditarComponent,
      },
      {
        path: 'edicion/:id',
        component: ClientEditarComponent,
      },
    ],
  },
  {
    path: 'admin/perfil',
    component: PerfilComponent,
  },

  ///ROL  Cliente
  {
    path: 'client',
    component: HomeClientComponent,
  },

  {
    path: 'client/home',
    component: HomeClientComponent,
  },
  {
    path: 'client/history',
    component: ClientHistoryComponent,
  },
  {
    path: 'client/shop',
    component: BodyguardShopComponent,
  },
  {
    path: 'client/services',
    component: ServClientListarComponent,
  },
  {
    path: 'client/perfil',
    component: PerfilComponent,
  },

  //ROL BODYGUARD
  {
    path: 'bodyguard',
    component: BodyguardHomeComponent,
  },
  {
    path: 'bodyguard/home',
    component: HomeClientComponent,
  },
  {
    path: 'bodyguard/peticiones',
    component: BodyguardPeticionesComponent,
  },
  {
    path: 'bodyguard/services',
    component: BodyguardServicesComponent,
  },
  {
    path: 'bodyguard/perfil',
    component: PerfilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}

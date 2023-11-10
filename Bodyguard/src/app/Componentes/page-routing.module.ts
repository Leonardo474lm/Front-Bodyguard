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

const routes: Routes = [
  //path para specialization
  {
    path:'home',
    component:HomeComponent

  },
  {
    path: 'specialization',
    component: SpecializationComponent,
  },
  //path para client

  {
        path: 'client',
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
            {
              path: 'listaServicios',
              component: ServClientListarComponent,
          },
        ],
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
      {
        path: 'listarServicios',
        component: ServBodyListarComponent,
      },
    ],
  },
  //path para service
  {
    path: 'service',
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
  //path para perfiles
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  //Lista de guardaespaldas  para el cliente
  {
    path:'shop',
    component:BodyguardShopComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}

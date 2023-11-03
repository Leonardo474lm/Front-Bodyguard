import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Componentes/login/login.component';
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
    path:'bodyguard',
    component:NavbarComponent,
    children: [
      {
        path: 'pages',
        loadChildren: () => import('./Componentes/page.module').then((m) => m.PageModule),

      },

    ],

  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

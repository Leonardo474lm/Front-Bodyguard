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


<<<<<<< HEAD
  },
   //path para specialization
   {
    path: 'specialization',
    component: SpecializationComponent,
    children: [
      {
        path: 'specializationLitar',
        component: SpecializationListarComponent,
      },
      {
        path: 'edicion/:id',
        component: SpecializationEditarComponent,
      },
    ],
=======
>>>>>>> bf3a92b9863cfe9b8880d18b198b3da96c592b60


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

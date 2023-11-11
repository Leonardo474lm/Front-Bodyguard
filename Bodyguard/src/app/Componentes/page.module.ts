import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PageRoutingModule } from './page-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';//
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort';
import { SpecializationFormDialogComponent } from './specialization/specialization-form-dialog/specialization-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BodyguarComponent } from './bodyguar/bodyguar.component';
import { PaymentComponent } from './payment/payment.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ServiceComponent } from './service/service.component';
import { ClientComponent } from './client/client.component';
import { ClientListarComponent } from './client/client-listar/client-listar.component';
import { ClientEditarComponent } from './client/client-editar/client-editar.component';
import { BodyEditarComponent } from './bodyguar/body-editar/body-editar.component';
import { BodyListarComponent } from './bodyguar/body-listar/body-listar.component';
import { ServiceListarComponent } from './service/service-listar/service-listar.component';
import { ServiceEditarComponent } from './service/service-editar/service-editar.component';
import { SpecializationListarComponent } from './specialization/specialization-listar/specialization-listar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { DeleteDialogComponent } from './specialization/specialization-listar/delete-dialog/delete-dialog.component';
import { BodyguardShopComponent } from './bodyguard-shop/bodyguard-shop.component';
import { ShopDialogComponent } from './bodyguard-shop/shop-dialog/shop-dialog.component';
import { ServClientListarComponent } from './client/serv-client-listar/serv-client-listar.component';
import { ServBodyListarComponent } from './bodyguar/serv-body-listar/serv-body-listar.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { BodyguardHomeComponent } from './bodyguard-home/bodyguard-home.component';
import { ClientHistoryComponent } from './client-history/client-history.component';
import { BodyguardPeticionesComponent } from './bodyguard-peticiones/bodyguard-peticiones.component';


@NgModule({
    declarations: [
    SpecializationFormDialogComponent,
    BodyguarComponent,
    PaymentComponent,
    SpecializationComponent,
    LoginComponent,
    RegisterComponent,
    ServiceComponent,
    ClientComponent,
    ClientListarComponent,
    ClientEditarComponent,
    BodyListarComponent,
    BodyEditarComponent,
    ServiceListarComponent,
    ServiceEditarComponent,
    SpecializationListarComponent,
    NavbarComponent,
    PerfilComponent,
    DeleteDialogComponent,
    BodyguardShopComponent,
    ShopDialogComponent,
    ServClientListarComponent,
    ServBodyListarComponent,
    HomeClientComponent,
    BodyguardHomeComponent,
    ClientHistoryComponent,
    BodyguardPeticionesComponent,

  ],
    imports: [

        HttpClientModule,
        CommonModule,
        PageRoutingModule,

        MatDatepickerModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatNativeDateModule,
        MatSortModule,
        MatDialogModule,
        MatIconModule,
        NgIf,
        MatButtonModule,
        MatInputModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSnackBarModule,
        MatSelectModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatSidenavModule,
        MatToolbarModule,


    ],
    providers: [],

})

export class PageModule { }

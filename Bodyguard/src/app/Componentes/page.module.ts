import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { PageRoutingModule } from './page-routing.module';
import { MatDatepickerModule } from '@angular/material/datepicker';//
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSortModule } from '@angular/material/sort'; //add


@NgModule({
    declarations: [
       
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
        MatSortModule
    ],
    providers: [],

})

export class PageModule { }

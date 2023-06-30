import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { RegistroFacturaComponent } from './registro-factura/registro-factura.component';
import { HomeComponent } from './home/home.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ConsultaFacComponent } from './consulta-fac/consulta-fac.component';





@NgModule({
  declarations: [
    HomeComponent,
    RegistroFacturaComponent,
    NavComponent,
    ConsultaFacComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatButtonModule,
    MatSelectModule
  ]
})
export class ComponentsModule { }

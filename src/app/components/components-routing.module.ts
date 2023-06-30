import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroFacturaComponent } from './registro-factura/registro-factura.component';
import { ConsultaFacComponent } from './consulta-fac/consulta-fac.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reg-fac', component: RegistroFacturaComponent },
  { path: 'cons-fac', component: ConsultaFacComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

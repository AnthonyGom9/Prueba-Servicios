import { Component, OnInit, ViewChild } from '@angular/core';
import { RegistroFacturaComponent } from '../registro-factura/registro-factura.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consulta-fac',
  templateUrl: './consulta-fac.component.html',
  styleUrls: ['./consulta-fac.component.css']
})
export class ConsultaFacComponent implements OnInit{
  @ViewChild(RegistroFacturaComponent) clase!: RegistroFacturaComponent;
  productos: any[] = [];
  nombreEmpresa: string = 'Servicios Quirurgicos, S.A.';
  datos: any = {};
  Formgroup: FormGroup = {} as FormGroup;

  constructor(private _formBuilder: FormBuilder) {
   
   }

  ngOnInit(): void {
    this.Formgroup = this._formBuilder.group({
      nit: [''],
    });
  }

  consultarFactura(){
    //@ts-ignore
    const data: any = JSON.parse(localStorage.getItem('productos'));
    console.log(data);
    console.log(this.Formgroup.value.nit);
    this.datos = data.find((element: any) => element.nit == this.Formgroup.value.nit);
    this.productos = this.datos.productos;
  }
}

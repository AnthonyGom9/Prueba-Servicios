import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registro-factura',
  templateUrl: './registro-factura.component.html',
  styleUrls: ['./registro-factura.component.css']
})
export class RegistroFacturaComponent implements OnInit{

  limitDate: Date = new Date();
  productos: any[] = [];
  Formulario: FormGroup = {} as FormGroup;
  nombreEmpresa: string = 'Servicios Quirurgicos, S.A.';
  TotalFacturas: [] = []

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.creaFormulario();
  }

  creaFormulario(){
    this.Formulario = this._formBuilder.group({
      nombre: [''],
      fecha: [''],
      producto: [''],
      cantidad: [''],
      precio: [''],
      total: [{value: '', disabled: true}],
      nit: [''],
      selected: ['']
    });
  }

  calcularTotal(){
    const cantidad = this.Formulario.value.cantidad;
    const precio = this.Formulario.value.precio;
    const total = cantidad * precio;
    this.Formulario.patchValue({total: total});
  }

  agregarProducto(){
    if(this.Formulario.value.producto == '' || this.Formulario.value.cantidad == '' || this.Formulario.value.precio == ''){
      alert('Debe llenar todos los campos');
      return;
    }
    const producto = {
      nombre: this.Formulario.value.producto,
      cantidad: this.Formulario.value.cantidad,
      precioUnitario: this.Formulario.value.precio,
      total: this.Formulario.get('total')?.value
    }
    this.productos.push(producto);
    this.Formulario.patchValue({producto: ''});
    this.Formulario.patchValue({cantidad: ''});
    this.Formulario.patchValue({precio: ''});
    this.Formulario.patchValue({total: ''});
  }

  registrarFactura(){
    if(this.Formulario.value.nombre == '' || this.Formulario.value.fecha == '' || this.Formulario.value.nit == ''){
      alert('Debe llenar todos los campos');
      return;
    }
    const facturas = {
      nombre: this.Formulario.value.nombre,
      fecha: this.Formulario.value.fecha,
      nit: this.Formulario.value.nit,
      productos: this.productos
    }
    console.log(facturas);
    //@ts-ignore
    this.TotalFacturas.push(facturas);
    localStorage.setItem('productos', JSON.stringify(this.TotalFacturas));
    this.Formulario.patchValue({nombre: ''});
    this.Formulario.patchValue({fecha: ''});
    this.Formulario.patchValue({nit: ''});
    this.productos = [];
  }

}

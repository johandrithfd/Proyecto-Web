import { ServicioVeterinaria } from "../servicio-veterinaria/servicio-veterinaria";

export class DetalleFactura {
  idDetalleFactura :number;
  valorServicio : number;
  cantidad : number;
  porcentajeIva : number;
  porcentajeDescuento : number;
  subTotal : number;
  total : number;
  valorDescuento : number;
  valorIva : number;
  servicioId : number;

  EstablecerValores ()
  {
    this.subTotal = this.valorServicio * this.cantidad;
    this.valorIva =  this.subTotal * this.porcentajeIva;
    this.valorDescuento = this.subTotal * this.porcentajeDescuento/100;
    this.total = this.subTotal + this.valorIva - this.valorDescuento;
  }

}

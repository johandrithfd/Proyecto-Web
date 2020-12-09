import { Cliente } from "../../Componentes/models/cliente";
import { DetalleFactura } from "../Detalle Factura/detalle-factura";

export class Factura {
  facturaId :number;
  fecha : Date = new Date();
  cantidad : number;
  subTotal : number;
  total : number;
  valorDescuento : number;
  valorIva : number;
  detallesFactura : DetalleFactura [] = [];
  identificacion : string;

   RealizarCalculos()
  {
    this.CalcularDescuento();
    this.CalcularSubtotal();
    this.CalcularIva();
    this.CalcularTotal();
  }

  CalcularTotal (){
    this.total = 0;
    this.detallesFactura.forEach( detalle => {
      this.total = this.total + detalle.total;
    });
    this.total = this.total - this.CalcularDescuento() + this.CalcularIva();
    return this.total;
  }
  CalcularSubtotal (){
    this.subTotal = 0;
    this.detallesFactura.forEach( detalle => {
      this.subTotal = this.subTotal + detalle.subTotal;
    });
    return this.total;
  }
  CalcularIva (){
    this.valorIva = 0;
    this.detallesFactura.forEach( detalle => {
      this.valorIva = this.valorIva + detalle.valorIva;
    });
    return this.valorIva;
  }
  CalcularDescuento (){
    this.valorDescuento = 0;
    this.detallesFactura.forEach( detalle => {
      this.valorDescuento = this.valorDescuento + detalle.valorDescuento;
    });
    return this.valorDescuento;
  }
}

import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Cliente } from '../models/cliente';
import { AlertModalFacturaComponent } from '../factura/alert-modal-factura/alert-modal-factura.component'
import { DetalleFactura } from '../../Modelos/Detalle Factura/detalle-factura';
import { Factura } from '../../Modelos/Factura/factura';
import { FacturaService } from 'src/app/services/Servicios/factura.service';
import { Mensaje } from '../../../services/Servicios/mensaje';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  identificacion : string;
  fecha : Date = new Date();
  cliente : Cliente = new Cliente();
  detallesFactura : DetalleFactura[] = [];
  factura : Factura = new Factura();
  servicios : ServicioVeterinaria [];
  total : number = 0;
  valorDescuento : number = 0;
  valorIva : number = 0;
  subTotal : number = 0;

  constructor(
    private servicioCliente : ClienteService,
    private modalService: NgbModal,
    private facturaService: FacturaService,
    private mensaje: Mensaje,
    private servicioService : ServiciosService
    ) { }

  ngOnInit(): void {
    this.servicios = [];
    this.servicioService.get().subscribe(servicios => { this.servicios = servicios; })
  }

  buscarCliente ()
  {
    this.servicioCliente.BuscarPersona(this.identificacion).subscribe( c =>
      {
        if(c != null)
        {
          this.cliente = c;
          this.mensaje.Informar("Busqueda Cliente","Cliente encontrado con exito");
        }
        else
        {
          this.mensaje.Informar("Busqueda Cliente", "El cliente no se encuntra registrado");
        }
      }
    );
  }
  nombreServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).nombre;
  }
  valorServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).valor;
  }
  actualizarValoresFactura ()
  {
    this.subTotal = this.calcularSubtoal();
    this.valorIva = this.factura.CalcularIva();
    this.valorDescuento = this.factura.CalcularDescuento();
    this.total = this.calcularTotal();
  }

  calcularDescuento ()
  {
    let valorDescuento = 0;
    this.factura.detallesFactura.forEach(d => {
      valorDescuento = valorDescuento + d.valorDescuento;
    })
    return valorDescuento;
  }
  calcularTotal ()
  {
    let valorTotal = 0;
    this.factura.detallesFactura.forEach(d => {
      valorTotal = valorTotal + d.total;
    })
    return valorTotal;
  }

  calcularSubtoal ()
  {
    let valorTotal = 0;
    this.factura.detallesFactura.forEach(d => {
      valorTotal = valorTotal + d.subTotal;
    })
    return valorTotal;
  }

  openModalServicio()
  {
    this.modalService.open(AlertModalFacturaComponent, { size: 'lg' }).result.then((d) => {  this.agregarDetalleFactura(d)});
  }

  agregarDetalleFactura (detalleFactura : DetalleFactura)
  {
    detalleFactura.EstablecerValores();
    this.factura.detallesFactura.push(detalleFactura);
    this.actualizarValoresFactura ();
  }

  registrarFactura()
  {
    if(this.cliente.identificacion == null)
    {
      this.mensaje.Informar("Error Al registrar Factura","No se ha asociado a ningun cliente");
    }
    else
    {
      if(this.factura.detallesFactura.length == 0)
      {
        this.mensaje.Informar("Error Al registrar Factura","No se ha asociado a ningun servicio a la factura");
      }
      else{
        this.factura.RealizarCalculos();
        this.factura.identificacion = this.cliente.identificacion;
        this.facturaService.post(this.factura).subscribe(r =>{
          this.mensaje.Informar("Registro Factura", r.mensaje);
        });
      }
    }

  }
  SepararPorPunto(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
    }
    return "$"+valor;
  }

}

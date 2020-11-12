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
  valordescuento : number = 0;
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
  actualizarValoresFactura ()
  {
    this.valorIva = this.factura.CalcularIva();
    this.valordescuento = this.factura.CalcularDescuento();
    this.subTotal = this.factura.CalcularTotal();
    this.total = this.factura.CalcularTotal();
  }
  valorServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).valor;
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
    this.factura.RealizarCalculos();
    this.factura.identificacion = this.cliente.identificacion;
    this.facturaService.post(this.factura).subscribe(r =>{
      this.mensaje.Informar("Registro Factura", r.mensaje);
    });
  }

}

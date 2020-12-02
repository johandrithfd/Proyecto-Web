import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { DetalleFactura } from 'src/app/veterinaria/Modelos/Detalle Factura/detalle-factura';
import { ServicioVeterinaria } from 'src/app/veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';

@Component({
  selector: 'app-alert-modal-factura',
  templateUrl: './alert-modal-factura.component.html',
  styleUrls: ['./alert-modal-factura.component.css']
})
export class AlertModalFacturaComponent implements OnInit {

  textoBuscado: string;
  servicios : ServicioVeterinaria [];
  servicio : ServicioVeterinaria = new ServicioVeterinaria();
  detalleFactura : DetalleFactura = new DetalleFactura();
  public page = 1;
  public pageSize = 5;

  constructor(public activeModal: NgbActiveModal ,private servicioService : ServiciosService) { }

  ngOnInit(): void {
    this.servicios = [];
    this.servicioService.get().subscribe(servicios => { this.servicios = servicios; })
  }

  agregarDetalleFactura (detalleFactura : DetalleFactura)
  {
    this.detalleFactura = detalleFactura;
  }
  cerrar ()
  {
    this.activeModal.close(this.detalleFactura);
  }
  CrearDetalleFactura (servicio : ServicioVeterinaria)
  {
    this.servicio = servicio;
    this.detalleFactura.servicioId = this.servicio.servicioId;
    this.detalleFactura.valorServicio = this.servicio.valor;
    this.detalleFactura.porcentajeIva = this.servicio.iva;
    this.detalleFactura.EstablecerValores();
  }
  SepararPorPunto(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
    }
    return valor+" $";
  }
}

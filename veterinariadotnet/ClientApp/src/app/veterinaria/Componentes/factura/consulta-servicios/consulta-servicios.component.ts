import { Component, EventEmitter, OnInit,Output } from '@angular/core';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { DetalleFactura } from 'src/app/veterinaria/Modelos/Detalle Factura/detalle-factura';
import { ServicioVeterinaria } from 'src/app/veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';

@Component({
  selector: 'app-consulta-servicios',
  templateUrl: './consulta-servicios.component.html',
  styleUrls: ['./consulta-servicios.component.css']
})
export class ConsultaServiciosComponent implements OnInit {

  textoBuscado: string;
  servicios : ServicioVeterinaria [];
  detalleFactura : DetalleFactura = new DetalleFactura();
  public page = 1;
  public pageSize = 5;

  @Output() seleccionado = new EventEmitter<DetalleFactura>();

  constructor(private servicioService : ServiciosService) { }

  ngOnInit(): void {
    this.servicios = [];
    this.servicioService.get().subscribe(servicios => { this.servicios = servicios; })
  }

  CrearDetalleFactura (servicio : ServicioVeterinaria)
  {
    this.detalleFactura.servicio = servicio;
    this.detalleFactura.valorServicio = servicio.valor;
    this.detalleFactura.porcentajeIva = servicio.iva;
    this.detalleFactura.EstablecerValores();
  }

  enviar(detalleFactura : DetalleFactura)
  {
    this.seleccionado.emit(detalleFactura);
  }

}

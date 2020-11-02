import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';
import { Cliente } from '../models/cliente';
import { AlertModalFacturaComponent } from '../factura/alert-modal-factura/alert-modal-factura.component'
import { DetalleFactura } from '../../Modelos/Detalle Factura/detalle-factura';

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

  constructor(
    private servicioCliente : ClienteService,
    private modalService: NgbModal
    ) { }

  ngOnInit(): void {

  }

  buscarCliente ()
  {
    this.servicioCliente.BuscarPersona(this.identificacion).subscribe( c =>
      {
        if(c != null)
        {
          this.cliente = c;
          alert("CLiente Encontrado");
        }
        else
        {
          alert("El cliente no se encuntra registrado");
        }
      }
    );
  }
  openModalServicio()
  {
    this.modalService.open(AlertModalFacturaComponent, { size: 'lg' }).result.then((d) => {  this.agregarDetalleFactura(d)});
  }
  agregarDetalleFactura (detalleFactura : DetalleFactura)
  {
    detalleFactura.EstablecerValores();
    this.detallesFactura.push(detalleFactura);
  }
}

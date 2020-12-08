import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaService } from 'src/app/services/Servicios/factura.service';
import { Mensaje } from 'src/app/services/Servicios/mensaje';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Factura } from 'src/app/veterinaria/Modelos/Factura/factura';
import { ServicioVeterinaria } from 'src/app/veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-imfo-factura',
  templateUrl: './imfo-factura.component.html',
  styleUrls: ['./imfo-factura.component.css']
})
export class ImfoFacturaComponent implements OnInit {

  servicios : ServicioVeterinaria [];
  @Input() factura : Factura;
  cliente : Cliente = new Cliente();

  constructor( private servicioCliente : ClienteService,
    public activeModal: NgbActiveModal,
    private facturaService: FacturaService,
    private mensaje: Mensaje,
    private servicioService : ServiciosService) { }

  ngOnInit(): void {
    this.servicios = [];
    this.servicioService.get().subscribe(servicios => { this.servicios = servicios; })
    this.buscarCliente();
  }

  nombreServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).nombre;
  }
  valorServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).valor;
  }
  buscarCliente ()
  {
    this.servicioCliente.BuscarPersona(this.factura.identificacion).subscribe( c =>
      {
        if(c != null)
        {
          this.cliente = c;
        }
        else
        {
          this.mensaje.Informar("Busqueda Cliente", "El cliente no se encuntra registrado");
        }
      }
    );
  }
  SepararPorPunto(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
    }
    return "$"+valor;
  }
}

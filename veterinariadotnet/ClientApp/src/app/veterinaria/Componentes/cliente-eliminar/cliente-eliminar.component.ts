import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/services/Servicios/mensaje';

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent implements OnInit {
  cliente: Cliente;
  constructor(private clienteService : ClienteService, public activeModal: NgbActiveModal, private mensajes: Mensaje) { }

  ngOnInit(): void {
    this.cliente= new Cliente();
  }
  buscar() {
    this.clienteService.BuscarPersona(this.cliente.identificacion).subscribe(result => {
      if (result.identificacion != null)
      {
        this.cliente = result;
        this.mensajes.Informar('Busqueda Cliente', 'Cliente encontrado con exito');
      }
      // tslint:disable-next-line:one-line
      else
      {
        this.cliente = new Cliente();
        this.mensajes.Informar('Busqueda Cliente', 'Cliente no encontrado ');
      }
    });
  }

  eliminar(){
    this.clienteService.Eliminar(this.cliente.identificacion).subscribe(p =>{
      if (p != null) {
        // tslint:disable-next-line:quotemark
        this.mensajes.Informar("Eliminacion Cliente","Cliente eliminado con exito");
        this.cliente = p;
      }
      // tslint:disable-next-line:one-line
      else {
        // tslint:disable-next-line:quotemark
        this.mensajes.Informar("Error","Cliente no encontrado");
        this.cliente= new Cliente();
      }
    });
  }


}

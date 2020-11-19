import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Cliente } from './../models/cliente';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/services/Servicios/mensaje';

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent implements OnInit {
  @Input() Cliente: Cliente;
  cliente: Cliente;
  constructor(private clienteService : ClienteService, public activeModal: NgbActiveModal, private mensajes: Mensaje) { }

  ngOnInit(): void {
    this.cliente = this.Cliente;
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

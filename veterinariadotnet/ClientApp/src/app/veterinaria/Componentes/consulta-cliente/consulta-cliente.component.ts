import { SignalRServiceCliente } from './../../../services/signal-r.service';
import { RespuestaConsulta } from './../../Modelos/Respuesta/respuesta-consulta';
import { ClienteModificarComponent } from './../cliente-modificar/cliente-modificar.component';
import { ClienteEliminarComponent } from './../cliente-eliminar/cliente-eliminar.component';
import { Component, OnInit } from '@angular/core';
import {Cliente } from '../models/cliente';
import {ClienteService} from '../../../services/serviciosRocha/cliente.service' ;
import { CurrencyPipe } from '@angular/common';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
    clientes: Cliente[];
    searchText: string;
  constructor(private clienteService: ClienteService, private modalService: NgbModal,private signalR : SignalRServiceCliente) { }

  ngOnInit(): void {
    this.clienteService.get().subscribe(result => { this.clientes = result; });
    /// Se suscribe al servicio de signal r y cuando se regustr una nueva persona se agregará el registro nuevo al array personas
    this.signalR.clienteReceived.subscribe((cliente: Cliente) => {
      this.clientes.push(cliente);
    });

    this.signalR.clienteDeleted.subscribe((cliente:Cliente)=>{

      var indice= this.clientes.findIndex(c=> c.identificacion==cliente.identificacion);
       this.clientes.splice(indice,1);
      });


  }

  ModalEliminar(indice)
  {
    const consultaBox = this.modalService.open(ClienteEliminarComponent, { size: 'lg' });
    // tslint:disable-next-line:prefer-const
    let respuesta = this.clientes[indice];
    consultaBox.componentInstance.Cliente = respuesta;
  }
  ModalModificar(indice)
  {
      const modelo = this.modalService.open(ClienteModificarComponent, { size: 'l' });
      // tslint:disable-next-line:prefer-const
      let cliente = this.clientes[indice];
     modelo.componentInstance.Cliente = cliente;
  }


}

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
  constructor(private clienteService: ClienteService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.clienteService.get().subscribe(result => { this.clientes = result; });
  }

  openModalManipulador(clienteId: number)
  {
    const consultaBox = this.modalService.open(ClienteEliminarComponent, { size: 'lg' });
    consultaBox.componentInstance.identificacion = clienteId;
  }
  openModal(clienteId: number)
  {
      const consultaBox = this.modalService.open(ClienteModificarComponent, { size: 'lg' });
      consultaBox.componentInstance.identificacion = clienteId;
    
  }


}

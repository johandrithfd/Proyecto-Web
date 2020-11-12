import { Component, OnInit } from '@angular/core';
import {Cliente } from '../models/cliente';
import {ClienteService} from '../../../services/serviciosRocha/cliente.service' ;
import { CurrencyPipe } from '@angular/common';



@Component({
  selector: 'app-consulta-cliente',
  templateUrl: './consulta-cliente.component.html',
  styleUrls: ['./consulta-cliente.component.css']
})
export class ConsultaClienteComponent implements OnInit {
    clientes: Cliente[];
    searchText: string;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.get().subscribe(result => { this.clientes = result; });
  }

}

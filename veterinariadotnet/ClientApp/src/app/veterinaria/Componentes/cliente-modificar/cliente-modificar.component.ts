import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Component, Input, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Mensaje } from 'src/app/services/Servicios/mensaje';

@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.css']
})
export class ClienteModificarComponent implements OnInit {
  @Input() Cliente: Cliente;


  cliente: Cliente;
  constructor(private clienteService: ClienteService,public activeModal: NgbActiveModal,private mensajes: Mensaje) { }

  ngOnInit(): void {
    this.cliente = this.Cliente;
  }

  actualizarDatos(){
    this.clienteService.Modificar(this.cliente).subscribe(result =>{
      if (result.identificacion != null) {
        // tslint:disable-next-line:quotemark
        this.mensajes.Informar("Modificacion Cliente", "Cliente modificado exitosamente");
        this.cliente = result;
      }
      // tslint:disable-next-line:one-line
      else {
        this.cliente = new Cliente();
        // tslint:disable-next-line:quotemark
        this.mensajes.Informar("Error", "Cliente no encontrado");
      }
    });
  }

}

import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Cliente } from './../models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-eliminar',
  templateUrl: './cliente-eliminar.component.html',
  styleUrls: ['./cliente-eliminar.component.css']
})
export class ClienteEliminarComponent implements OnInit {
  cliente: Cliente;
  constructor(private clienteService : ClienteService) { }

  ngOnInit(): void {
    this.cliente= new Cliente();
  }
  buscar() {
    this.clienteService.BuscarPersona(this.cliente.identificacion).subscribe(result => {
      if (result.identificacion != null)
      {
        this.cliente = result;
        alert('Busqueda realizada con éxito');
      }
      // tslint:disable-next-line:one-line
      else
      {
        this.cliente = new Cliente();
        alert('La búsqueda no arrojó ningún resultado');
      }
    });
  }

  eliminar(){
    this.clienteService.Eliminar(this.cliente.identificacion).subscribe(p =>{
      if (p != null) {
        alert('Cliente eliminado con éxito:');
        this.cliente = p;
      }
      // tslint:disable-next-line:one-line
      else {
        alert('El cliente que intenta eliminar no se encuentra registrada');
        this.cliente= new Cliente();
      }
    });
  }


}

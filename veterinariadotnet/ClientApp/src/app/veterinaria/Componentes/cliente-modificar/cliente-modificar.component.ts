import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';

@Component({
  selector: 'app-cliente-modificar',
  templateUrl: './cliente-modificar.component.html',
  styleUrls: ['./cliente-modificar.component.css']
})
export class ClienteModificarComponent implements OnInit {
  cliente: Cliente;
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.cliente = new Cliente();
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

  actualizarDatos(){
    this.clienteService.Modificar(this.cliente).subscribe(result =>{
      if (result.identificacion != null) {
        alert('Datos actualizados con éxito:');
        this.cliente = result;
      }
      // tslint:disable-next-line:one-line
      else {
        this.cliente = new Cliente();
        alert('La persona que intenta modificar no se encuentra registrada');
      }
    });
  }

}

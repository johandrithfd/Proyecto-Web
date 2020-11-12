import { Pipe, PipeTransform } from '@angular/core';
import { Cliente } from '../veterinaria/Componentes/models/cliente';

@Pipe({
  name: 'filtrocliente'
})
export class FiltroclientePipe implements PipeTransform {

  transform(clientes: Cliente[], filtrocliente: string): any{
    // tslint:disable-next-line:curly
    if (filtrocliente == null) return clientes;
         return clientes.filter(p=> p.primerApellido.toLowerCase().indexOf(filtrocliente.toLowerCase()) !== -1
         || p.nombres.toLowerCase().indexOf(filtrocliente.toLowerCase()) !== -1);

  }

}

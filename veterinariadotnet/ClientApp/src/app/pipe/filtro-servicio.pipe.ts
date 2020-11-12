import { Pipe, PipeTransform } from '@angular/core';
import { ServicioVeterinaria } from '../veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';

@Pipe({
  name: 'filtroServicio'
})
export class FiltroServicioPipe implements PipeTransform {

  transform(servicios : ServicioVeterinaria [],textoBuscado : string ): any {
    if(textoBuscado == null) return servicios;
    return servicios.filter(servicio => servicio.nombre.toLowerCase().indexOf(textoBuscado.toLowerCase()) !== -1);
  }

}

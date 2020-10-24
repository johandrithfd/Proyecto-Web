import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '../../../services/Servicios/servicios.service';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';

@Component({
  selector: 'app-tarjeta-servicio',
  templateUrl: './tarjeta-servicio.component.html',
  styleUrls: ['./tarjeta-servicio.component.css']
})
export class TarjetaServicioComponent implements OnInit {

  constructor(private service : ServiciosService) { }
  servicios : ServicioVeterinaria [] =[];
  ngOnInit(): void {
    this.service.get().subscribe(result =>{
        this.servicios = result;
    });
  }

}

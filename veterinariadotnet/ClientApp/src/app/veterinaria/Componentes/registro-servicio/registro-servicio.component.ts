import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';
import { ServiciosService } from '.././../../services/Servicios/servicios.service';

@Component({
  selector: 'app-registro-servicio',
  templateUrl: './registro-servicio.component.html',
  styleUrls: ['./registro-servicio.component.css']
})
export class RegistroServicioComponent implements OnInit {

  formularioRegistro : FormGroup;
  sudmitted : false;
  servicio : ServicioVeterinaria ;
  constructor(
    private formBuilder : FormBuilder,
    private servicioService : ServiciosService
  ) { }
  

  ngOnInit(): void {
    this.EstablecerValidacionesFormulario();
    this.servicio = new ServicioVeterinaria();
  }
  get formulario()
  {
    return this.formularioRegistro.controls;
  }
  get nombre ()
  {
    return this.formularioRegistro.get('nombre');
  }
  get precio ()
  {
    return this.formularioRegistro.get('precio');
  }
  get descripcion ()
  {
    return this.formularioRegistro.get('descripcion');
  }
  EstablecerValidacionesFormulario  ()
  {
    this.formularioRegistro = this.formBuilder.group(
      {
        nombre : ['',[Validators.required,Validators.minLength(7),Validators.maxLength(35)]],
        precio : ['',[Validators.required,Validators.minLength(4),Validators.pattern('^[0-9]+$')]],
        descripcion : ['',[Validators.required,Validators.maxLength(100),Validators.minLength(40)]]
      }
    );
  }
  agregarServicio()
  {
    this.servicioService.post(this.servicio).subscribe(s => {
      if (s != null) {
        alert('servicio agregado!');
        this.servicio = s;
      }
      else
      {
        alert('error');
      }
    });
  }
}

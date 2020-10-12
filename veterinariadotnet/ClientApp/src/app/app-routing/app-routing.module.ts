import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroServicioComponent } from '../veterinaria/Componentes/registro-servicio/registro-servicio.component'
import { from } from 'rxjs';
import { RegistroClienteComponent} from '../../app/veterinaria/Componentes/registro-cliente/registro-cliente.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'registro-servicio', component: RegistroServicioComponent},
      { path: 'registro-cliente', component: RegistroClienteComponent},
    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

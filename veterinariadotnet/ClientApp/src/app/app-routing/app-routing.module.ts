import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroMascotaComponent } from '../../app/veterinaria/Componentes/registro-mascota/registro-mascota.component';
import { RegistroClienteComponent} from '../../app/veterinaria/Componentes/registro-cliente/registro-cliente.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'registro-mascota', component: RegistroMascotaComponent},
      { path: 'registro-cliente', component: RegistroClienteComponent},
    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroMascotaComponent } from '../../app/veterinaria/Componentes/registro-mascota/registro-mascota.component';
import { RegistroPersonaComponent } from '../veterinaria/Componentes/registro-persona/registro-persona.component';

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'registro-mascota', component: RegistroMascotaComponent},
      { path: 'registro-cliente', component: RegistroPersonaComponent},
    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

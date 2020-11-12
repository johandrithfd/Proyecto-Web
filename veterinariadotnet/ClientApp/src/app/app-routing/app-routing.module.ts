import { FacturaComponent } from './../veterinaria/Componentes/factura/factura.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { RegistroServicioComponent } from '../veterinaria/Componentes/registro-servicio/registro-servicio.component';
import { from } from 'rxjs';
import { RegistroClienteComponent} from '../../app/veterinaria/Componentes/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent} from '../../app/veterinaria/Componentes/consulta-cliente/consulta-cliente.component';
import { LoginComponent } from '../veterinaria/Componentes/login/login.component';
import { AuthGuard } from '../services/serviciosRocha/auth.guard';
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'registro-servicio', component: RegistroServicioComponent, canActivate: [AuthGuard]},
      { path: 'registro-cliente', component: RegistroClienteComponent, canActivate: [AuthGuard]},
      { path: 'consulta-cliente', component: ConsultaClienteComponent , canActivate: [AuthGuard]},
      { path: 'factura', component: FacturaComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent},
    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

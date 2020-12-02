import { ClienteModificarComponent } from './../veterinaria/Componentes/cliente-modificar/cliente-modificar.component';
import { ClienteEliminarComponent } from './../veterinaria/Componentes/cliente-eliminar/cliente-eliminar.component';
import { RegistroUsuarioComponent } from './../veterinaria/Componentes/registro-usuario/registro-usuario.component';
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
import { ConsultaFacturaComponent } from '../veterinaria/Componentes/consulta-factura/consulta-factura.component';
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full', canActivate: [AuthGuard] },
      { path: 'registro-servicio', component: RegistroServicioComponent, canActivate: [AuthGuard]},
      { path: 'registro-cliente', component: RegistroClienteComponent, canActivate: [AuthGuard]},
      { path: 'consulta-cliente', component: ConsultaClienteComponent , canActivate: [AuthGuard]},
      { path: 'factura', component: FacturaComponent, canActivate: [AuthGuard]},
      { path: 'login', component: LoginComponent},
      { path: 'registro-usuario', component: RegistroUsuarioComponent},
      { path: 'eliminar-cliente', component: ClienteEliminarComponent,canActivate: [AuthGuard]},
      { path: 'app-consulta-factura', component: ConsultaFacturaComponent, canActivate: [AuthGuard] },
      { path: 'modificar-cliente', component: ClienteModificarComponent,canActivate: [AuthGuard]}
    ]),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

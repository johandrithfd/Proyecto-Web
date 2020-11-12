import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RegistroServicioComponent } from './veterinaria/Componentes/registro-servicio/registro-servicio.component';
import { RegistroClienteComponent } from './veterinaria/Componentes/registro-cliente/registro-cliente.component';
import { ConsultaClienteComponent } from './veterinaria/Componentes/consulta-cliente/consulta-cliente.component';
import { ClienteService } from './services/serviciosRocha/cliente.service';
import { TarjetaServicioComponent } from './veterinaria/Componentes/tarjeta-servicio/tarjeta-servicio.component';
import { FacturaComponent } from './veterinaria/Componentes/factura/factura.component';
import { LoginComponent } from './veterinaria/Componentes/login/login.component';

import { FiltroclientePipe } from './pipe/filtrocliente.pipe';
import { RegistroUsuarioComponent } from './veterinaria/Componentes/registro-usuario/registro-usuario.component';
import { JwtInterceptorService } from './services/serviciosRocha/jwt-interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    FooterComponent,
    RegistroClienteComponent,
    ConsultaClienteComponent,
    RegistroServicioComponent,
    TarjetaServicioComponent,
    FacturaComponent,
    LoginComponent,
    FiltroclientePipe,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ClienteService,{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

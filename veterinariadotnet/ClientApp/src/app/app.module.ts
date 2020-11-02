import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { FiltroServicioPipe } from './Pipe/filtro-servicio.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertModalComponent } from './@base/alert-modal/alert-modal.component';
import { AlertModalFacturaComponent } from './veterinaria/Componentes/factura/alert-modal-factura/alert-modal-factura.component';
import { ConsultaServiciosComponent } from './veterinaria/Componentes/factura/consulta-servicios/consulta-servicios.component';





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
    FiltroServicioPipe,
    AlertModalComponent,
    AlertModalFacturaComponent,
    ConsultaServiciosComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  entryComponents:[AlertModalComponent , AlertModalFacturaComponent],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

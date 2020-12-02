import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';
import { Factura } from 'src/app/veterinaria/Modelos/Factura/factura';
import { Respuesta } from 'src/app/veterinaria/Modelos/Respuesta/respuesta';
import { RespuestaConsulta } from 'src/app/veterinaria/Modelos/Respuesta/respuesta-consulta';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  baseUrl: string;

  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService
  ) { this.baseUrl = baseUrl; }

  post(factura: Factura): Observable<Respuesta<Factura>> {
    return this.http.post<Respuesta<Factura>>(this.baseUrl + 'api/Factura',factura)
      .pipe(
        tap(_ => this.handleErrorService.log('datos servicio enviados')),
        catchError(this.handleErrorService.handleError<Respuesta<Factura>>('Registrar factura', null))
      );
  }
  get(): Observable<RespuestaConsulta<Factura>> {
    return this.http.get<RespuestaConsulta<Factura>>(this.baseUrl + 'api/Factura')
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<RespuestaConsulta<Factura>>('Consulta Factura', null))
      );
  }
}

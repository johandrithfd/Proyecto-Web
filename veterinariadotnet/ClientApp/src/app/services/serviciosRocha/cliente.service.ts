import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Cliente} from '../../veterinaria/Componentes/models/cliente';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
    this.baseUrl = baseUrl;
  }
  get(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.baseUrl + 'api/Cliente')
      .pipe(tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente[]>('Consulta Cliente', null))
    );
  }
  post(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseUrl + 'api/Cliente', cliente)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente>('Registrar Cliente', null))
    );
  }
  BuscarPersona(identificacion : string): Observable<Cliente> {
    return this.http.get<Cliente>(this.baseUrl + 'api/Cliente/' + identificacion)
    .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<Cliente>('busqueda Persona', null))
    );
  }

  Eliminar(identificacion: string): Observable<Cliente> {
    return this.http.delete<Cliente>(this.baseUrl + 'api/Cliente/' + identificacion).pipe (
      tap(_ => this.handleErrorService.log('Datos enviados exitosamente')),
      catchError(this.handleErrorService.handleError<Cliente>('Eliminar cliente', null))
    );
  }
   Modificar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.baseUrl + 'api/Cliente', cliente).pipe(
      tap(_ => this.handleErrorService.log('Datos enviados exitosamente')),
      catchError(this.handleErrorService.handleError<Cliente>('Modificar Cliente', null))
    );
  }

}

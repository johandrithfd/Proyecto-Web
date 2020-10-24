import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Inject, } from '@angular/core';
import { Observable } from 'rxjs';
import { ServicioVeterinaria } from '../../veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';
import { tap, catchError } from 'rxjs/operators';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService

  ) {this.baseUrl = baseUrl; }

  post(servicio: ServicioVeterinaria): Observable<ServicioVeterinaria> {
    return this.http.post<ServicioVeterinaria>(this.baseUrl + 'api/Servicio',servicio)
      .pipe(
        tap(_ => this.handleErrorService.log('datos servicio enviados')),
        catchError(this.handleErrorService.handleError<ServicioVeterinaria>('Registrar servicio', null))
      );
  }

  get(): Observable<ServicioVeterinaria[]> {
    return this.http.get<ServicioVeterinaria[]>(this.baseUrl + 'api/Servicio')
    .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<ServicioVeterinaria[]>('Consulta Persona', null))
    );
  }

}

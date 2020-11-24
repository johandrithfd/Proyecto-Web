import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mensaje } from '../services/Servicios/mensaje';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(private mensaje :Mensaje) { }
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // tslint:disable-next-line:curly
      if(error.status == "500")
        // tslint:disable-next-line:quotemark
        this.mostrarError500(error);
      // tslint:disable-next-line:curly
      if(error.status == "400")
        // tslint:disable-next-line:quotemark
        this.mostrarError400(error);
      // tslint:disable-next-line:quotemark
      // tslint:disable-next-line:curly
      if(error.status == "401")
        // tslint:disable-next-line:quotemark
        alert("Error 401 de la petición");
      return of(result as T);
    };
  }

  public log(message: string) {
    console.log(message);
  }
  private mostrarError500(error: any): void {
    console.error(error);
  }

  private mostrarError400(error: any): void {
    console.error(error);
    let contadorValidaciones: number = 0;
    let mensajeValidaciones: string =
      `Señor(a) usuario(a), se han presentado algunos errores de validación, por favor revíselos y vuelva a realizar la operación.<br/><br/>`;

    // tslint:disable-next-line: forin
    for (const prop in error.error.errors) {
      contadorValidaciones++;
      mensajeValidaciones += `<strong>${contadorValidaciones}. ${prop}:</strong>`;

      error.error.errors[prop].forEach(element => {
        mensajeValidaciones += `<br/> - ${element}`;
      });

      mensajeValidaciones += `<br/>`;
    }

    this.mensaje.Informar('MENSAJE DE ERROR', mensajeValidaciones);
    }


  }


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor() { }
  public handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // tslint:disable-next-line:curly
      if(error.status == "500")
        // tslint:disable-next-line:quotemark
        alert("Error 500 de la petición");
      // tslint:disable-next-line:curly
      if(error.status == "400")
        // tslint:disable-next-line:quotemark
        alert("Error 400 de la petición");
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
  }


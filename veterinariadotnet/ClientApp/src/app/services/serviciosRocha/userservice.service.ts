import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { HandleHttpErrorService } from 'src/app/@base/handle-http-error.service';
import { User } from 'src/app/seguridad/user';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
    @Inject('BASE_URL') baseUrl: string,
    private handleErrorService: HandleHttpErrorService) {
      this.baseUrl = baseUrl;
      }

      post(user: User): Observable<User> {
        return this.http.post<User>(this.baseUrl + 'api/Usuario', user)
          .pipe(
            tap(_ => this.handleErrorService.log('datos enviados')),
            catchError(this.handleErrorService.handleError<User>('Registrar Usuario', null))
          );
      }
}

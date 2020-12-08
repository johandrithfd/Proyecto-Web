import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Mensaje } from 'src/app/services/Servicios/mensaje';
import { AuthenticationService } from 'src/app/services/serviciosRocha/authentication.service';
import { UserserviceService } from 'src/app/services/serviciosRocha/userservice.service';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserserviceService,
    private mensajes: Mensaje) {

          // redirect to home if already logged in
          if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/']);
        }
        }

        ngOnInit(): void {
          this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            identificacion: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]],
            email: ['', Validators.required],
            role: ['', Validators.required],
            mobilephone: ['', Validators.required],
            });

        }

        get f() { return this.registerForm.controls; }

        onSubmit() {
          this.submitted = true;

          if (this.registerForm.invalid) {
              return;
          }

          this.loading = true;
          this.userService.post(this.registerForm.value)
              .pipe(first())
              .subscribe(
                  data => {
                    this.mensajes.Informar('Resultado Operación', 'Usuario Creado');
                      this.router.navigate(['/login']);
                  },
                  error => {
                    this.mensajes.Informar('Resultado Operación', 'Error Faltan Campos');
                      this.loading = false;
                  });
      }
}

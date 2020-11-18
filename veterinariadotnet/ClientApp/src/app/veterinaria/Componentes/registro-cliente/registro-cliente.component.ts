import { Component, OnInit } from "@angular/core";
import { Cliente } from "../models/cliente";
import { ClienteService } from "../../../services/serviciosRocha/cliente.service";
import {
  FormGroup,
  Validators,
  FormBuilder,
  AsyncValidator,
} from "@angular/forms";
import { Mensaje } from "src/app/services/Servicios/mensaje";

@Component({
  selector: "app-registro-cliente",
  templateUrl: "./registro-cliente.component.html",
  styleUrls: ["./registro-cliente.component.css"],
})
export class RegistroClienteComponent implements OnInit {
  formularioRegistro: FormGroup;
  submitted = false;

  constructor(
    private clienteService: ClienteService,
    private formBuilder: FormBuilder,
    private mensajes: Mensaje
  ) {}
  cliente: Cliente;

  ngOnInit(): void {
    this.formularioRegistro = this.formBuilder.group({
      // tslint:disable-next-line:no-unused-expression
      identificacion: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(7),
            Validators.pattern("^[0-9 ]+$"),
          ],
        },
      ],
      nombres: ["", [Validators.required, Validators.minLength(4)]],
      primerApellido: ["", [Validators.required, Validators.minLength(4)]],
      segundoApellido: ["", [Validators.required, Validators.minLength(4)]],
      telefono: [
        "",
        [
          Validators.required,
          Validators.minLength(7),
          Validators.pattern("^[0-9 ]+$"),
        ],
      ],
      celular: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern("^[0-9 ]+$"),
        ],
      ],
      direccion: ["", [Validators.required, Validators.minLength(7)]],
      correo: [
        "",
        [Validators.required, Validators.minLength(7), Validators.email],
      ],
    });
    this.cliente = new Cliente();
  }

  add() {
    this.clienteService.post(this.cliente).subscribe((c) => {
      if (c != null) {
        this.mensajes.Informar('Agregar CLiente', 'Cliente Guardado satisfatoriamente');
        this.cliente = c;
      }
      //this.mensajes.Informar('Error', 'Cliente Ya se encuentra registrado');
    });
  }

  get f() {
    return this.formularioRegistro.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.formularioRegistro.invalid) {
      return;
    }
    this.add();
  }

  onReset() {
    this.submitted = false;
    this.formularioRegistro.reset();
  }
}

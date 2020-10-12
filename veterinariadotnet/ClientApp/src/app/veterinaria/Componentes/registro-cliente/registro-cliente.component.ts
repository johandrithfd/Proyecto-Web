import { Component, OnInit } from "@angular/core";
import { Cliente } from "../models/cliente";
import { ClienteService } from "../../../services/serviciosRocha/cliente.service";

@Component({
  selector: "app-registro-cliente",
  templateUrl: "./registro-cliente.component.html",
  styleUrls: ["./registro-cliente.component.css"],
})
export class RegistroClienteComponent implements OnInit {
  cliente: Cliente;
  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.cliente = new Cliente();
  }
  add(){
    this.clienteService.post(this.cliente).subscribe((c) => {
      if (c != null) {
        alert("Cliente Creado!");
        this.cliente = c;
      }
    });
  }
}


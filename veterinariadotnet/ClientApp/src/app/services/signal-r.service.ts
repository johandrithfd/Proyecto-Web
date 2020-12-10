import { EventEmitter, Inject, Injectable } from '@angular/core';
import { Cliente } from '../veterinaria/Componentes/models/cliente';
import * as signalR from "@aspnet/signalr";

@Injectable({
  providedIn: 'root'
})
export abstract class SignalRService {

  public hubConnection: signalR.HubConnection;
  clienteReceived = new EventEmitter<Cliente>();
  clienteDeleted= new EventEmitter<Cliente>();
  baseUrl: string;
  constructor(@Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    this.buildConnection();
    this.startConnection();
  }

  private buildConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(this.baseUrl + "signalHub") //use your api adress here and make sure you use right hub name.
      .build();
  };

  private startConnection = () => {
    this.hubConnection
      .start()
      .then(() => {
        console.log("Connection Started...");
        this.registerSignalEvents();
      })
      .catch(err => {
        console.log("Error while starting connection: " + err);

        //if you get error try to start connection again after 3 seconds.
        setTimeout(function () {
          this.startConnection();
        }, 3000);
      });
  };

  abstract registerSignalEvents(): void;
}

@Injectable({
  providedIn: 'root'
})
export class SignalRServiceCliente extends SignalRService {
  registerSignalEvents() {
    this.hubConnection.on("ClienteRegistrado", (data: Cliente) => {
      this.clienteReceived.emit(data);
    });

    this.hubConnection.on("ClienteEliminado", (data: Cliente) => {
      this.clienteDeleted.emit(data);
    });

  }
}










import { Component, OnInit } from '@angular/core';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';
import { Factura } from '../../Modelos/Factura/factura';
import { DetalleFactura } from '../../Modelos/Detalle Factura/detalle-factura';
import { Cliente } from '../models/cliente';
import { FacturaService } from '../../../services/Servicios/factura.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImfoFacturaComponent } from './imfo-factura/imfo-factura.component';

@Component({
  selector: 'app-consulta-factura',
  templateUrl: './consulta-factura.component.html',
  styleUrls: ['./consulta-factura.component.css']
})
export class ConsultaFacturaComponent implements OnInit {


  cliente: Cliente = new Cliente();
  detallesFactura: DetalleFactura[] = [];
  facturas: Factura [] = [] ;
  servicios: ServicioVeterinaria[];

  constructor(private facturaService: FacturaService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.facturaService.get().subscribe(f => { this.facturas = f.elementos });
  }

  AbrirConsulta(factura : Factura) {
    const consultaBox = this.modalService.open(ImfoFacturaComponent, { size: 'lg' })
        consultaBox.componentInstance.factura = factura;
  }
  SepararPorPunto(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
    }
    return "$"+valor;
  }
}

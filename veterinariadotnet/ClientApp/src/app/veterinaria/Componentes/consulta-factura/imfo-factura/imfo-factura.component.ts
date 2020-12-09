import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaService } from 'src/app/services/Servicios/factura.service';
import { Mensaje } from 'src/app/services/Servicios/mensaje';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { ClienteService } from 'src/app/services/serviciosRocha/cliente.service';
import { Factura } from 'src/app/veterinaria/Modelos/Factura/factura';
import { ServicioVeterinaria } from 'src/app/veterinaria/Modelos/servicio-veterinaria/servicio-veterinaria';
import { Cliente } from '../../models/cliente';
import { Columns, PdfMakeWrapper, Table } from 'pdfmake-wrapper';
import { DetalleFactura } from 'src/app/veterinaria/Modelos/Detalle Factura/detalle-factura';
import { ITable } from 'pdfmake-wrapper/lib/interfaces';
import pdfFonts from "pdfmake/build/vfs_fonts";
import { Txt } from 'pdfmake-wrapper';

PdfMakeWrapper.setFonts(pdfFonts);
type tipoFila = [string,number,number,number,number,number,number,number,number];

@Component({
  selector: 'app-imfo-factura',
  templateUrl: './imfo-factura.component.html',
  styleUrls: ['./imfo-factura.component.css']
})

export class ImfoFacturaComponent implements OnInit {

  servicios : ServicioVeterinaria [];
  @Input() factura : Factura;
  cliente : Cliente = new Cliente();
  nombre : string;
  valor : number;
  async generarEstructuraPdf ()
  {
    const pdf = new PdfMakeWrapper();
    const detallesFactura = this.factura.detallesFactura;

    pdf.add(new Txt('FACTURA ELECTRONICA MY VERTER').alignment('center').bold().end);
    pdf.add('  ');
    pdf.add('  ');
    pdf.add(new Txt('FECHA : ' +this.recorrerString()).fontSize(9).bold().end);
    pdf.add('  ');
    pdf.add('  ');
    pdf.add(new Txt('Datos Cliente').fontSize(9).bold().end);
    pdf.add(new Columns([ 'CEDULA : ' + this.cliente.identificacion, 'DIRECCION : '  + this.cliente.direccion,'APELLIDO 1 : ' + this.cliente.primerApellido ]).fontSize(9).end);
    pdf.add(new Columns([ 'APELLIDO 2 : ' + this.cliente.segundoApellido, 'CELULAR : '  + this.cliente.celular,'']).fontSize(9).end);
    pdf.add('  ');
    pdf.add('  ');
    pdf.add(this.crearTablaPdf(detallesFactura));
    pdf.add('  ');
    pdf.add('   ');
    pdf.add(this.crearTablaPdfTotales());
    pdf.footer('      Factura Electronica Generada en MyVeter');

    pdf.create().open();

  }
  recorrerString ()
  {
    let cadena = this.factura.fecha.toString();
    let cadenaVacia = "";
    for (let index = 0; index < 10; index++) {
      cadenaVacia = cadenaVacia + cadena[index];
    }
    return cadenaVacia;
  }
  crearTablaPdf( detallesFactura : DetalleFactura [] ):ITable
  {
    return new Table([
      ["SERVICIO","PRECIO","PORCENTAJE IVA","PORCENTAJE DESCUENTO","VALOR IVA","VALOR DESCUENTO","CANTIDAD","SUBTOTAL","TOTAL"],
      ...this.mapearDetallesAPdf(detallesFactura)
    ])
    .layout('lightHorizontalLines')
    .fontSize(8)
    .end;
  }
  crearTablaPdfTotales( ):ITable
  {
    return new Table([
      ["           ","            ",],
      ["TOTAL IVA : ",this.factura.valorIva],
      ["TOTAL DESCUENTO : ",this.factura.valorDescuento],
      ["SUBTOTAL : ",this.factura.subTotal],
      ["TOTAL : ",this.factura.total]
    ])
    .layout('lightHorizontalLines')
    .fontSize(9)
    .end;
  }
  mapearDetallesAPdf( detallesFactura : DetalleFactura []): tipoFila[]
  {
    return detallesFactura.map(fila =>[
      this.nombreServicio(fila.servicioId),this.valorServicio(fila.servicioId),fila.porcentajeIva,fila.porcentajeDescuento,fila.valorIva,fila.valorDescuento,fila.cantidad,fila.subTotal,fila.total
    ]);
  }

  constructor( private servicioCliente : ClienteService,
    public activeModal: NgbActiveModal,
    private mensaje: Mensaje,
    private servicioService : ServiciosService) { }

  ngOnInit(): void {
    this.servicios = [];
    this.servicioService.get().subscribe(servicios =>
      {
         this.servicios = servicios;
      }
       )
    this.buscarCliente();
  }

  nombreServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).nombre;
  }
  valorServicio (servicioId : number)
  {
    return this.servicios.find(d => d.servicioId == servicioId).valor;
  }
  buscarCliente ()
  {
    this.servicioCliente.BuscarPersona(this.factura.identificacion).subscribe( c =>
      {
        if(c != null)
        {
          this.cliente = c;
        }
        else
        {
          this.mensaje.Informar("Busqueda Cliente", "El cliente no se encuntra registrado");
        }
      }
    );
  }
  SepararPorPunto(valor): any {
    while (/(\d+)(\d{3})/.test(valor.toString())) {
      valor = valor.toString().replace(/(\d+)(\d{3})/, '$1' + '.' + '$2');
    }
    return "$"+valor;
  }
}

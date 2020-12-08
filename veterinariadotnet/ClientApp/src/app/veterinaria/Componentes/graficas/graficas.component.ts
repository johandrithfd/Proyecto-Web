import { Component, OnInit } from '@angular/core';
import { ChartColor, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Colors } from 'ng2-charts';
import { Label } from 'ng2-charts/lib/base-chart.directive';
import { ServiciosService } from 'src/app/services/Servicios/servicios.service';
import { DetalleFactura } from '../../Modelos/Detalle Factura/detalle-factura';
import { ServicioVeterinaria } from '../../Modelos/servicio-veterinaria/servicio-veterinaria';
import * as pluginDataLabels from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  constructor(protected ServicioService: ServiciosService) {
    this.getServicios();
   }

  // tslint:disable-next-line: member-ordering
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    },




  };

  // tslint:disable-next-line: member-ordering



// tslint:disable-next-line: member-ordering
public barChartLabels: Label[] = ['Peluqueria', 'pediquiere','baño canino','corte pelo', 'Castracion'];
// tslint:disable-next-line: member-ordering



  // tslint:disable-next-line: member-ordering
  public barChartType: ChartType = 'bar';
  // tslint:disable-next-line: member-ordering
  public barChartLegend = true;



  public barChartData: ChartDataSets[];
  public barChartPlugins =[pluginDataLabels];



  private servicios:ServicioVeterinaria [];
  private valores= [];
  private nombreServicios = [];


  ngOnInit(): void {
  }


  getServicios() {
    this.ServicioService.get().subscribe(res => {
      this.servicios = res;
      for (const serv of this.servicios) {
        this.valores.push(serv.valor);
        this.nombreServicios.push(serv.nombre);
        }
      this.CargarBar(this.valores, this.nombreServicios);
    });

  }

  CargarBar(valores,nombreServicios) {
    this.barChartData = [];
 // tslint:disable-next-line: forin
 for (const index in valores) {
      this.barChartData.push({ data: valores[index], label: nombreServicios[index],  backgroundColor: ['yellow','rgb(0, 0, 250)', 'red','green','purple']});
}
}
}

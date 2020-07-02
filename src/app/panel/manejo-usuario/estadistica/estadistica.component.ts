import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
import { UsuariosService } from '../../services/usuarios.service';
import { FormControl } from '@angular/forms';

import * as xlsx from 'xlsx';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss']
})
export class EstadisticaComponent implements OnInit {

  @ViewChild('clientTbl', { static: false }) clientTbl: ElementRef;
  @ViewChild('serviceTbl', { static: false }) serviceTbl: ElementRef;
  @ViewChild('carrsTbl', { static: false }) carrsTbl: ElementRef;
  @ViewChild('provTbl', { static: false }) provTbl: ElementRef;


  dateInit = 0;
  dateEnd = 0;
  blockSend = true;
  dataclientChar = { datasets: [{ data: [""] }], labels: ["",] };
  dataserviceChar = { datasets: [{ data: [""] }], labels: ["",] };
  datacarsChar = { datasets: [{ data: [""] }], labels: ["",] };
  dataprovidersChar = { datasets: [{ data: [""] }], labels: ["",] };

  excel = [];

  initDay = new FormControl(new Date("01/01/2020"));
  today = new FormControl(new Date());

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  }

  public barChartLabelsClient: Label[] = [];
  public barChartLabelsServices: Label[] = [];
  public barChartLabelsCars: Label[] = [];
  public barChartLabelsProviders: Label[] = [];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartDataClient: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];

  public barChartDataServices: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];

  public barChartDataCars: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];

  public barChartDataProviders: ChartDataSets[] = [
    { data: [], label: 'Series A' }
  ];

  constructor(private userService: UsuariosService) { }

  ngOnInit() {
    this.searchDate();
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  gatedate(d, type) {
    if (type == "1") this.dateInit = new Date(d).getTime();
    if (type == "2") this.dateEnd = new Date(d).getTime();

    console.log(this.dateInit, " ", this.dateEnd)
    this.blockSend = !(this.dateInit != 0 && this.dateEnd != 0);
    console.log(this.blockSend)
  }

  searchDate() {

    this.userService.getClientChar(this.dateInit, this.dateEnd).subscribe((d: any) => {
      console.log(d.data.items[0].data)
      this.dataclientChar = d.data.items[0].data;
      let data = d.data.items[0].data;
      this.barChartLabelsClient = data.labels;
      this.barChartDataClient = [{ data: data.datasets[0].data, label: data.datasets[0].label }];

    }, err => {
      console.log(err)
    });

    this.userService.getServicesChar(this.dateInit, this.dateEnd).subscribe((d: any) => {
      console.log(d.data.items)
      this.dataserviceChar = d.data.items[0].data;
      let data = d.data.items[0].data;
      this.barChartLabelsServices = data.labels;
      this.barChartDataServices = [{ data: data.datasets[0].data, label: data.datasets[0].label }];
    }, err => {
      console.log(err)
    })

    this.userService.getCarsChar(this.dateInit, this.dateEnd).subscribe((d: any) => {
      console.log(d.data.items)
      this.datacarsChar = d.data.items[0].data;
      let data = d.data.items[0].data;
      this.barChartLabelsCars = data.labels;
      this.barChartDataCars = [{ data: data.datasets[0].data, label: data.datasets[0].label }];

    }, err => {
      console.log(err)
    })

    this.userService.getprovidersChar(this.dateInit, this.dateEnd).subscribe((d: any) => {
      console.log(d.data.items)
      this.dataprovidersChar = d.data.items[0].data;
      let data = d.data.items[0].data;
      this.barChartLabelsProviders = data.labels;
      this.barChartDataProviders = [{ data: data.datasets[0].data, label: data.datasets[0].label }];

    }, err => {
      console.log(err)
    })

  }

  exportExcel() {

  }

  exportclientExcel() {
    const ws: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.clientTbl.nativeElement);
    const ws2: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.serviceTbl.nativeElement);
    const ws3: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.carrsTbl.nativeElement);
    const ws4: xlsx.WorkSheet =
      xlsx.utils.table_to_sheet(this.provTbl.nativeElement);

    const wb: xlsx.WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(wb, ws, 'clientes');
    xlsx.utils.book_append_sheet(wb, ws2, 'servicios');
    xlsx.utils.book_append_sheet(wb, ws3, 'Carros');
    xlsx.utils.book_append_sheet(wb, ws4, 'Providers');


    xlsx.writeFile(wb, 'estadisticas.xlsx');
  }

}

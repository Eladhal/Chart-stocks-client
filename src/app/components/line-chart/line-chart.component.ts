import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { Observable, of } from 'rxjs';
import { StockPricesHttpService } from 'src/app/services/stock-prices-http/stock-prices-http.service';
import { StockPricesArrangeDataService } from 'src/app/services/stock-prices-arrange-data/stock-prices-arrange-data.service';

@Component({
  selector: 'stock-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
    { data: [], label: 'Stock close prices' },
    { data: [], label: 'Threshold'}
  ];

  public lineChartLabels: Label[] = [];
  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: '80',
          borderColor: 'red',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgba(0, 0, 0, 0)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];
  // @ViewChild(BaseChartDirective) chart: BaseChartDirective;

  constructor(private stockPricesArrangeDataService: StockPricesArrangeDataService) { 
  }

  ngOnInit() {
    this.stockPricesArrangeDataService.getStockPrices();
    this.stockPricesArrangeDataService.getChartdataSubjectObservable()
      //.pipe(catchError(this.handleError<IchartData>('getStockPrices', )))
      .subscribe((chartData)=>{
        console.log(this.lineChartData);
        this.lineChartData = [
         { ...this.lineChartData[0], data: chartData.close },
         { ...this.lineChartData[1], data: chartData.threshold }
        ];
        
        this.lineChartLabels = chartData.labels;
      });
  }

  private handleError<T> (operation = 'operation', result?: T) {
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }


}

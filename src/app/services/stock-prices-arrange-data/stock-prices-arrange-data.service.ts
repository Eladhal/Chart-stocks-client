import { Injectable } from '@angular/core';
import { IChartData } from 'src/app/models/ichart-data';
import { ReplaySubject, Observable } from 'rxjs';
import { StockPricesHttpService } from '../stock-prices-http/stock-prices-http.service';

@Injectable({
  providedIn: 'root'
})
export class StockPricesArrangeDataService {

  lineChartSeriesData;
  symbol = 'MSFT';
  numOfDataPoints = 5;
  threshold = 50;

  private chartdataSubject: ReplaySubject<any>;
  readonly stockPricesProperty = 'Time Series (Daily)';
  readonly stockClosePriceProperty = '4. close';

  constructor(private stockPricesHttpService: StockPricesHttpService) {
    this.chartdataSubject = new ReplaySubject<IChartData>(1);
    this.lineChartSeriesData = {
      close:[],
      threshold: [],
      labels:[]
    };
   }

   public getStockPrices(symbol = 'MSFT',functionName = 'TIME_SERIES_DAILY') {
      this.stockPricesHttpService.getStockPrices({ symbol, functionName })
      .subscribe(data => this.initStockPricesChartData(data));
      
  }

  initStockPricesChartData(apiData:any){
    this.resetChartData();
    const stockPricesObj = apiData[this.stockPricesProperty];
    for(var propt in stockPricesObj){
      this.lineChartSeriesData.labels.push(propt)
      const closePrice = stockPricesObj[propt][this.stockClosePriceProperty];
      this.lineChartSeriesData.close.push(closePrice);
    }

    this.chartdataSubject.next({
      labels: this.lineChartSeriesData.labels.slice(0, this.numOfDataPoints),
      close: this.lineChartSeriesData.close.slice(0, this.numOfDataPoints),
      threshold: this.createThresholdData(),
    });
  }

  createThresholdData() {
    const data = [];
    for (let i = 0; i < this.numOfDataPoints; i++) {
      data.push(this.threshold);
    }
    return data;
  }

  getChartdataSubjectObservable(): Observable<any> {  
    return this.chartdataSubject.asObservable();
  } 

  resetChartData(){
    this.lineChartSeriesData.close.length = 0;
    this.lineChartSeriesData.labels.length = 0;
  }

  setThreshold(threshold: number) {
    if (threshold){
      this.threshold = threshold;
      this.chartdataSubject.next({
        labels: this.lineChartSeriesData.labels.slice(0, this.numOfDataPoints),
        close: this.lineChartSeriesData.close.slice(0, this.numOfDataPoints),
        threshold: this.createThresholdData(),
      });
    }
  }

  setNumOfPoints(numOfPoints: number) {
    if (numOfPoints)
    {
      this.numOfDataPoints = numOfPoints;
      this.chartdataSubject.next({
        labels: this.lineChartSeriesData.labels.slice(0, this.numOfDataPoints),
        threshold: this.createThresholdData(),
        close: this.lineChartSeriesData.close.slice(0, this.numOfDataPoints),
      });
    }
  }

  setSymbol(symbol: string) {
    if (this.symbol != symbol){
      this.symbol = symbol;
      this.getStockPrices(symbol);
    }
  }
}

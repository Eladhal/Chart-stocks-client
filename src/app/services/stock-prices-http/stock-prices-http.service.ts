import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StockPricesArrangeDataService } from '../stock-prices-arrange-data/stock-prices-arrange-data.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockPricesHttpService {
  API_KEY:string = 'TV3YA3HYDIBXFIJW';

  constructor(private http: HttpClient) { 
    }

  public getStockPrices({ symbol = 'MSFT', functionName = 'TIME_SERIES_DAILY' }: { symbol?: string; functionName?: string; } = {}):Observable<any> {
    return this.http.get(`https://www.alphavantage.co/query?function=${functionName}&symbol=${symbol}&apikey=${this.API_KEY}`);
  }
}

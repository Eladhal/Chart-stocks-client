import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TopStockSymbols } from 'src/app/models/top-stocks';
import { StockPricesHttpService } from 'src/app/services/stock-prices-http/stock-prices-http.service';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent {

  @Output() show = new EventEmitter();
  topStockSymbols: string[];
  selectedSymbol = 'MSFT';
  threshold: number;
  numOfPoints: number;

  constructor(private stockPricesHttpService: StockPricesHttpService) { 
    this.topStockSymbols = TopStockSymbols;
  }

  onBtnShowClicked(){
    this.show.emit({
      numOfPoints: this.numOfPoints,
      threshold: this.threshold,
      symbol: this.selectedSymbol
    });
  }

}

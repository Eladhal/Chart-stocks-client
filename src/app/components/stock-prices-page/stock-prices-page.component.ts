import { Component, OnInit } from '@angular/core';
import { StockPricesArrangeDataService } from 'src/app/services/stock-prices-arrange-data/stock-prices-arrange-data.service';

@Component({
  selector: 'stock-prices-page',
  templateUrl: './stock-prices-page.component.html',
  styleUrls: ['./stock-prices-page.component.css']
})
export class StockPricesPgaeComponet implements OnInit {

  constructor(private stockPricesArrangeService: StockPricesArrangeDataService) { }

  ngOnInit() {
  }

  onTopBarChanged({numOfPoints,threshold,symbol}) {
    this.stockPricesArrangeService.setNumOfPoints(numOfPoints);
    this.stockPricesArrangeService.setThreshold(threshold);
    this.stockPricesArrangeService.setSymbol(symbol);
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { TopStockSymbols } from 'src/app/models/top-stocks';

@Component({
  selector: 'app-top-menu-bar',
  templateUrl: './top-menu-bar.component.html',
  styleUrls: ['./top-menu-bar.component.css']
})
export class TopMenuBarComponent {

  @Output() show = new EventEmitter();
  topStockSymbols: string[];
  selectedSymbol = 'MSFT'; // Initial value only
  threshold = 50;  // Initial value only
  numOfPoints = 5;  // Initial value only

  constructor() { 
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

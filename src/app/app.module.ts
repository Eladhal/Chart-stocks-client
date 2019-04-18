import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StockPricesPgaeComponet } from './components/stock-prices-page/stock-prices-page.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { StockPricesHttpService } from './services/stock-prices-http/stock-prices-http.service';
import { StockPricesArrangeDataService } from './services/stock-prices-arrange-data/stock-prices-arrange-data.service';
import {MatButtonModule} from '@angular/material';
import { TopMenuBarComponent } from './components/top-menu-bar/top-menu-bar.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    StockPricesPgaeComponet,
    LineChartComponent,
    TopMenuBarComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ChartsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule
    
  ],
  providers: [StockPricesHttpService,StockPricesArrangeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

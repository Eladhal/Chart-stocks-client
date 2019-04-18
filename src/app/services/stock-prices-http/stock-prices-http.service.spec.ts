import { TestBed, inject } from '@angular/core/testing';
import { StockPricesHttpService } from './stock-prices-http.service';

describe('StockPricesHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockPricesHttpService]
    });
  });

  it('should be created', inject([StockPricesHttpService], (service: StockPricesHttpService) => {
    expect(service).toBeTruthy();
  }));
});

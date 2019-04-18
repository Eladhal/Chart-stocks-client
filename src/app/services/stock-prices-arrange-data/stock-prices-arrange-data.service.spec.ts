import { TestBed, inject } from '@angular/core/testing';

import { StockPricesArrangeDataService } from './stock-prices-arrange-data.service';

describe('StockPricesArrangeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockPricesArrangeDataService]
    });
  });

  it('should be created', inject([StockPricesArrangeDataService], (service: StockPricesArrangeDataService) => {
    expect(service).toBeTruthy();
  }));
});

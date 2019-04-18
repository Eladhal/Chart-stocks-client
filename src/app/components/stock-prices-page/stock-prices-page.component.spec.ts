import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockPricesPgaeComponet } from './stock-prices-page.component';

describe('MainPageComponent', () => {
  let component: StockPricesPgaeComponet;
  let fixture: ComponentFixture<StockPricesPgaeComponet>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockPricesPgaeComponet ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockPricesPgaeComponet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

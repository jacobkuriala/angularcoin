import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceChartPickerComponent } from './price-chart-picker.component';

describe('PriceChartPickerComponent', () => {
  let component: PriceChartPickerComponent;
  let fixture: ComponentFixture<PriceChartPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceChartPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceChartPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

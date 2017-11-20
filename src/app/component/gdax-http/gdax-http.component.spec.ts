import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdaxHttpComponent } from './gdax-http.component';

describe('GdaxHttpComponent', () => {
  let component: GdaxHttpComponent;
  let fixture: ComponentFixture<GdaxHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdaxHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdaxHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

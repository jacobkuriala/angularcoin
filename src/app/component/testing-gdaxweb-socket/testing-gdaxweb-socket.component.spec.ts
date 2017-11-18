import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingGdaxwebSocketComponent } from './testing-gdaxweb-socket.component';

describe('TestingGdaxwebSocketComponent', () => {
  let component: TestingGdaxwebSocketComponent;
  let fixture: ComponentFixture<TestingGdaxwebSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingGdaxwebSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingGdaxwebSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

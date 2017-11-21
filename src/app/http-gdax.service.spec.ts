import { TestBed, inject } from '@angular/core/testing';

import { HttpGdaxService } from './http-gdax.service';

describe('HttpGdaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGdaxService]
    });
  });

  it('should be created', inject([HttpGdaxService], (service: HttpGdaxService) => {
    expect(service).toBeTruthy();
  }));
});

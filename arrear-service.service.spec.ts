import { TestBed } from '@angular/core/testing';

import { ArrearServiceService } from './arrear-service.service';

describe('ArrearServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrearServiceService = TestBed.get(ArrearServiceService);
    expect(service).toBeTruthy();
  });
});

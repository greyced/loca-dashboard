import { TestBed } from '@angular/core/testing';

import { RealEstateDataService } from './real-estate.service';

describe('RealEstateDataService', () => {
  let service: RealEstateDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

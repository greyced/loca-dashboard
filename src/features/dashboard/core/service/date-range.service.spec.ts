import { TestBed } from '@angular/core/testing';

import { DateRangeService } from '../../../../core/services/date-range.service';

describe('DateRangeService', () => {
  let service: DateRangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateRangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import FakeAuthService from './auth.service';

describe('AuthService', () => {
  let service: FakeAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

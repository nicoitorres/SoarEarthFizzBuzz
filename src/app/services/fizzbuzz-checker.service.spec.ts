import { TestBed } from '@angular/core/testing';

import { FizzbuzzCheckerService } from './fizzbuzz-checker.service';

describe('FizzbuzzCheckerService', () => {
  let service: FizzbuzzCheckerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzCheckerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

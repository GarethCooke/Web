import { TestBed } from '@angular/core/testing';

import { EELSharedService } from './eelshared.service';

describe('EELSharedService', () => {
  let service: EELSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EELSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

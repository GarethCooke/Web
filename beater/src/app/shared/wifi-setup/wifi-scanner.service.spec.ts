import { TestBed } from '@angular/core/testing';

import { WifiSelectService } from './wifi-select.service';

describe('WifiSelectService', () => {
  let service: WifiSelectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WifiSelectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

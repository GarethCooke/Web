import { TestBed } from '@angular/core/testing';

import { AppRouteReuseStrategyService } from './app-route-reuse-strategy.service';

describe('AppRouteReuseStrategyService', () => {
  let service: AppRouteReuseStrategyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRouteReuseStrategyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

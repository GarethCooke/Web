import { TestBed } from '@angular/core/testing';

import { BeaterSettingsService } from './beater-settings.service';

describe('BeaterSettingsService', () => {
  let service: BeaterSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaterSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

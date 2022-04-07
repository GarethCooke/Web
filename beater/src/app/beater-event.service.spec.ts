import { TestBed } from '@angular/core/testing';

import { BeaterEventService } from './beater-event.service';

describe('BeaterEventService', () => {
  let service: BeaterEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeaterEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

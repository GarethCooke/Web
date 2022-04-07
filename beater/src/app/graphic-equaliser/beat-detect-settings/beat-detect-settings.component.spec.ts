import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatDetectSettingsComponent } from './beat-detect-settings.component';

describe('BeatDetectSettingsComponent', () => {
  let component: BeatDetectSettingsComponent;
  let fixture: ComponentFixture<BeatDetectSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatDetectSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatDetectSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

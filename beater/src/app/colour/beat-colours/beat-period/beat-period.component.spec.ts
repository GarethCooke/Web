import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatPeriodComponent } from './beat-period.component';

describe('BeatPeriodComponent', () => {
  let component: BeatPeriodComponent;
  let fixture: ComponentFixture<BeatPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

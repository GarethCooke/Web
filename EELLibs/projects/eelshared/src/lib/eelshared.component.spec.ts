import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EELSharedComponent } from './eelshared.component';

describe('EELSharedComponent', () => {
  let component: EELSharedComponent;
  let fixture: ComponentFixture<EELSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EELSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EELSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

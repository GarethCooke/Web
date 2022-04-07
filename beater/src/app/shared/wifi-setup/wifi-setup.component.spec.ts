import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiSetupComponent } from './wifi-setup.component';

describe('WifiSetupComponent', () => {
  let component: WifiSetupComponent;
  let fixture: ComponentFixture<WifiSetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WifiSetupComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

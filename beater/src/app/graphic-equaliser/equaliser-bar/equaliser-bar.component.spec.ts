import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EqualiserBarComponent } from './equaliser-bar.component';

describe('EqualiserBarComponent', () => {
  let component: EqualiserBarComponent;
  let fixture: ComponentFixture<EqualiserBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EqualiserBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EqualiserBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

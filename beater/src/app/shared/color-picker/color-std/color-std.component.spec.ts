import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorStdComponent } from './color-std.component';

describe('ColorStdComponent', () => {
  let component: ColorStdComponent;
  let fixture: ComponentFixture<ColorStdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorStdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

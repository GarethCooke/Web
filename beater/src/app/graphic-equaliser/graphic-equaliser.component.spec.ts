import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphicEqualiserComponent } from './graphic-equaliser.component';

describe('GraphicEqualiserComponent', () => {
  let component: GraphicEqualiserComponent;
  let fixture: ComponentFixture<GraphicEqualiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphicEqualiserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphicEqualiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatColoursComponent } from './beat-colours.component';

describe('BeatColoursComponent', () => {
  let component: BeatColoursComponent;
  let fixture: ComponentFixture<BeatColoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatColoursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatColoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

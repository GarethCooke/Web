import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatColourListComponent } from './beat-colour-list.component';

describe('BeatColourListComponent', () => {
  let component: BeatColourListComponent;
  let fixture: ComponentFixture<BeatColourListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeatColourListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeatColourListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

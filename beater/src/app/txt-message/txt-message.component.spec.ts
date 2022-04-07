import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxtMessageComponent } from './txt-message.component';

describe('TxtMessageComponent', () => {
  let component: TxtMessageComponent;
  let fixture: ComponentFixture<TxtMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxtMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxtMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

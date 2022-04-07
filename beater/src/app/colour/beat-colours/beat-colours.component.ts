import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BeatPeriodComponent } from './beat-period/beat-period.component';

@Component({
  selector: 'bb-beat-colours',
  templateUrl: './beat-colours.component.html',
  styleUrls: ['./beat-colours.component.scss']
})
export class BeatColoursComponent implements OnInit {
  @ViewChild(BeatPeriodComponent) beatPeriod: BeatPeriodComponent;


  constructor() { }

  ngOnInit(): void {
  }
}

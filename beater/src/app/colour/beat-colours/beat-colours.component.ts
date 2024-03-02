import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BeatPeriodComponent } from './beat-period/beat-period.component';
import { BeatColourListComponent } from './beat-colour-list/beat-colour-list.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'bb-beat-colours',
  standalone: true,
  imports: [BeatPeriodComponent, BeatColourListComponent, MatIcon],
  templateUrl: './beat-colours.component.html',
  styleUrls: ['./beat-colours.component.scss'],
})
export class BeatColoursComponent implements OnInit {
  @ViewChild(BeatPeriodComponent) beatPeriod: BeatPeriodComponent | undefined = undefined;

  constructor() {}

  ngOnInit(): void {}
}

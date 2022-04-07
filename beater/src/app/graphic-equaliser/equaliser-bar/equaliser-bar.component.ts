import { Component, Input, OnInit } from '@angular/core';
import { IBeaterEventBand } from '../beater-event';

@Component({
  selector: 'bb-equaliser-bar',
  templateUrl: './equaliser-bar.component.html',
  styleUrls: ['./equaliser-bar.component.scss']
})
export class EqualiserBarComponent implements OnInit {
  @Input() freqdata: IBeaterEventBand;
  Math = Math;

  constructor() { }

  ngOnInit(): void {
  }

}

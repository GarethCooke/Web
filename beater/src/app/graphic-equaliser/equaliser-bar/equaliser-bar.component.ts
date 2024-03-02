import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IBeaterEventBand } from '../beater-event';

@Component({
  selector: 'bb-equaliser-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equaliser-bar.component.html',
  styleUrls: ['./equaliser-bar.component.scss'],
})
export class EqualiserBarComponent implements OnInit {
  @Input() freqdata: IBeaterEventBand | undefined = undefined;
  Math = Math;

  constructor() {}

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ColorPaletteComponent } from './color-palette/color-palette.component';

@Component({
  selector: 'color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent implements OnInit {
  @ViewChild(ColorPaletteComponent) colorpalate: ColorPaletteComponent;
  @Input() color: string;
  @Output("color") colorEmitter: EventEmitter<string> = new EventEmitter();;
  @Output("colorChange") colorChg: EventEmitter<string> = new EventEmitter();;
  public hue: string;
  public stdcolor: string;

  ngOnInit(): void {
    if (this.color)
      this.hue = this.color;
  }

  fixColour(value: string): void {
    this.color = value;
    this.colorEmitter.emit(value);
  }

  colorChange(value: string): void {
    this.color = value;
    this.colorChg.emit(value);
  }

  setColor(value: string): void {
    this.hue = value;
    this.color = value;
    this.colorpalate.setColor(value);
  }

  setStdColor(changes: string): void {
    this.stdcolor = changes
    if (changes != "")
      this.hue = this.color = changes;
  }
}

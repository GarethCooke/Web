/* eslint-disable semi */
import { NgModule } from '@angular/core';
import { ColorPickerComponent } from './color-picker.component';
import { ColorSliderComponent } from './color-slider/color-slider.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { CommonModule } from '@angular/common';
import { ColorStdComponent } from './color-std/color-std.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [ColorPickerComponent, ColorSliderComponent, ColorPaletteComponent, ColorStdComponent],
  imports: [CommonModule,
    MatGridListModule],
  exports: [ColorPickerComponent]
})
export class ColorPickerModule { }

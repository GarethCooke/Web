/* eslint-disable max-classes-per-file */
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';
import { IColorChange } from 'src/app/shared/color-picker/color-change';
import { ColorDialogComponent } from 'src/app/shared/color-picker/color-dialog/color-dialog.component';
import { IBeatCycleColour } from 'src/app/beater-settings/beat-cycle-colour';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import Color from 'color';

class LocalCopyBeatPeriodData {
  colour: string = '';

  duration: number = 0;

  durationtype: string = '';

  beatdecay: number = 0;

  constructor(data: IBeatCycleColour | null) {
    if (data) {
      this.colour = data.colour;
      this.duration = data.duration;
      this.durationtype = data.durationtype;
      this.beatdecay = data.beatdecay;
    }
  }
}

@Component({
  selector: 'bb-beat-period',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule, MatSliderModule],
  templateUrl: './beat-period.component.html',
  styleUrls: ['./beat-period.component.scss'],
})
export class BeatPeriodComponent implements IColorChange, OnChanges {
  @Input() beatdata: IBeatCycleColour = new LocalCopyBeatPeriodData(null);

  duration: number = 0;

  constructor(private dialog: MatDialog, private settingsService: BeaterSettingsService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  saveChanges(): void {
    this.settingsService.saveSettings();
  }

  colorChange(color: string): void {
    if (this.beatdata) {
      this.beatdata.colour = Color(color).hex();
    }
  }

  colourPick(rect: DOMRect): void {
    this.dialog.open(ColorDialogComponent, { panelClass: 'dropdown-dialog', position: { left: `${rect.x}px`, top: `${rect.y + rect.height}px` }, data: { observer: this } });
  }

  iconColour(): string {
    if (this.beatdata && this.beatdata.colour) return Color(!this.beatdata.colour || Color(this.beatdata.colour).isLight() ? 'black' : 'white').string();
    return Color('black').string();
  }

  save() {
    this.settingsService.add(new LocalCopyBeatPeriodData(this.beatdata));
    this.settingsService.saveSettings();
  }

  getBoundingClientRect(target: any) {
    return target.getBoundingClientRect();
  }
}

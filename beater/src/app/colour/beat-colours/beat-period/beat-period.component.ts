/* eslint-disable max-classes-per-file */
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';
import { IColorChange } from 'src/app/shared/color-picker/color-change';
import { ColorDialogComponent } from 'src/app/shared/color-picker/color-dialog/color-dialog.component';
import { IBeatCycleColour } from 'src/app/beater-settings/beat-cycle-colour';

class LocalCopyBeatPeriodData {
  colour: string;

  duration: number;

  durationtype: string;

  beatdecay: number;

  constructor(data: IBeatCycleColour) {
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
  templateUrl: './beat-period.component.html',
  styleUrls: ['./beat-period.component.scss'],
})
export class BeatPeriodComponent implements OnInit, IColorChange, OnChanges {
  @Input() beatdata: IBeatCycleColour;

  duration: number;

  private Color = require('color');

  constructor(private dialog: MatDialog, private settingsService: BeaterSettingsService) {}

  ngOnChanges(changes: SimpleChanges): void {}

  saveChanges(): void {
    this.settingsService.saveSettings();
  }

  colorChange(color: string): void {
    this.beatdata.colour = this.Color(color).hex();
  }

  ngOnInit(): void {
    if (!this.beatdata) {
      this.beatdata = new LocalCopyBeatPeriodData(null);
    }
  }

  colourPick(rect: DOMRect): void {
    this.dialog.open(ColorDialogComponent, { panelClass: 'dropdown-dialog', position: { left: `${rect.x}px`, top: `${rect.y + rect.height}px` }, data: { observer: this } });
  }

  iconColour(): string {
    if (this.beatdata && this.beatdata.colour) return this.Color(!this.beatdata.colour || this.Color(this.beatdata.colour).isLight() ? 'black' : 'white');
    return this.Color('black');
  }

  save() {
    this.settingsService.add(new LocalCopyBeatPeriodData(this.beatdata));
    this.settingsService.saveSettings();
  }

  getBoundingClientRect(target) {
    return target.getBoundingClientRect();
  }
}

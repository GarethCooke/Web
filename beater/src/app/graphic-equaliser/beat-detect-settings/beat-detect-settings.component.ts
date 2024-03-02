import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlider } from '@angular/material/slider';
import { MatSliderThumb } from '@angular/material/slider';
import { MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';

@Component({
  selector: 'bb-beat-detect-settings',
  standalone: true,
  imports: [CommonModule, FormsModule, MatGridListModule, MatSlider, MatSliderThumb, MatLabel, MatIcon],
  templateUrl: './beat-detect-settings.component.html',
  styleUrls: ['./beat-detect-settings.component.scss'],
})
export class BeatDetectSettingsComponent {
  Math = Math;

  constructor(public settingsService: BeaterSettingsService) {}

  reset(): void {
    if (this.settingsService.settings) {
      this.settingsService.settings.filter = 94;
      this.settingsService.settings.beatdebounce = 30;
      this.settingsService.settings.gainlow = 80;
      this.settingsService.settings.gainincrement = 100;
      this.settingsService.settings.gaindecrement = 10;
      this.settingsService.settings.beatdecay = 100;
      this.settingsService.settings.minbeatband = 1;
      this.settingsService.settings.maxbeatband = 1;
      this.settingsService.saveSettings();
    }
  }
}

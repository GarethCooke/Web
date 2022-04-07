import { Component, Input, OnInit } from '@angular/core';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';

@Component({
  selector: 'bb-beat-detect-settings',
  templateUrl: './beat-detect-settings.component.html',
  styleUrls: ['./beat-detect-settings.component.scss']
})
export class BeatDetectSettingsComponent {
  Math = Math;

  constructor(public settingsService: BeaterSettingsService) { }

  reset(): void {
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

import { ChangeDetectorRef, Component, SimpleChange } from '@angular/core';
import { BeaterSettingsService } from '../beater-settings/beater-settings.service';

@Component({
  selector: 'bb-txt-message',
  templateUrl: './txt-message.component.html',
  styleUrls: ['./txt-message.component.scss'],
})
export class TxtMessageComponent {
  constructor(public settingsService: BeaterSettingsService, private cdr: ChangeDetectorRef) {}

  saveChanges(): void {
    this.settingsService.saveSettings();
  }
}

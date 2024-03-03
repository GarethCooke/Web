import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatSlider } from '@angular/material/slider';
import { MatSliderThumb } from '@angular/material/slider';
import { BeaterSettingsService } from '../beater-settings/beater-settings.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'bb-txt-message',
  standalone: true,
  imports: [CommonModule, FormsModule, MatFormField, MatLabel, MatSlideToggle, MatSlider, MatInputModule, MatSliderThumb],
  templateUrl: './txt-message.component.html',
  styleUrls: ['./txt-message.component.scss'],
})
export class TxtMessageComponent {
  constructor(public settingsService: BeaterSettingsService, private cdr: ChangeDetectorRef) {}

  saveChanges(): void {
    this.settingsService.saveSettings();
  }
}

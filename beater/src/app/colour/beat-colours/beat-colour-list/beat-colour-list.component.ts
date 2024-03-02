import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IBeatCycleColour } from 'src/app/beater-settings/beat-cycle-colour';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';
import { DragDropModule, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BeatPeriodComponent } from '../beat-period/beat-period.component';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'bb-beat-colour-list',
  standalone: true,
  imports: [CommonModule, BeatPeriodComponent, DragDropModule, MatIcon],
  templateUrl: './beat-colour-list.component.html',
  styleUrls: ['./beat-colour-list.component.scss'],
})
export class BeatColourListComponent {
  @Input() cyclecolors: IBeatCycleColour[] | undefined = undefined;

  constructor(public settingsService: BeaterSettingsService) {}

  remove(index: number): void {
    if (this.settingsService.settings) {
      this.settingsService.settings.cyclecolours.splice(index, 1);
      this.settingsService.saveSettings();
    }
  }

  drop(event: CdkDragDrop<string[]>) {
    if (this.settingsService.settings) {
      moveItemInArray(this.settingsService.settings.cyclecolours, event.previousIndex, event.currentIndex);
      this.settingsService.saveSettings();
    }
  }
}

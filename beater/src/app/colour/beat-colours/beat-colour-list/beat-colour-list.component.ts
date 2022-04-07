import { Component, Input, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { IBeatCycleColour } from 'src/app/beater-settings/beat-cycle-colour';
import { BeaterSettingsService } from 'src/app/beater-settings/beater-settings.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'bb-beat-colour-list',
  templateUrl: './beat-colour-list.component.html',
  styleUrls: ['./beat-colour-list.component.scss']
})
export class BeatColourListComponent {
  @Input() cyclecolors: IBeatCycleColour[];

  constructor(public settingsService: BeaterSettingsService) { }

  remove(index: number): void {
    this.settingsService.settings.cyclecolours.splice(index, 1);
    this.settingsService.saveSettings();
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.settingsService.settings.cyclecolours, event.previousIndex, event.currentIndex);
    this.settingsService.saveSettings();
  }
}

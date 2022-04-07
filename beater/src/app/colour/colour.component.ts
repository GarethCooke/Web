import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { IBeaterSettings } from '../beater-settings/beater-settings';
import { BeaterSettingsService } from '../beater-settings/beater-settings.service';
import { ColorPickerComponent } from '../shared/color-picker/color-picker.component';

@Component({
  selector: 'bb-colour',
  templateUrl: './colour.component.html',
  styleUrls: ['./colour.component.scss'],
  animations: [
    trigger('swipeComponent', [
      transition(':enter', [style({ transform: 'translateX(400px)', opacity: 0 }), animate('500ms', style({ transform: 'translateX(0px)', opacity: 1 }))]),
      transition(':leave', [style({ transform: 'translateX(0px)', opacity: 1 }), animate('500ms', style({ transform: 'translateX(-400px)', opacity: 0 }))])
    ]),
    trigger('fadeComponent', [
      transition(':enter', [style({ opacity: 0 }), animate('500ms', style({ opacity: 1 }))]),
      transition(':leave', [style({ opacity: 1 }), animate('500ms', style({ opacity: 0 }))])
    ])]
})
export class ColourComponent implements AfterViewInit {
  @ViewChild(ColorPickerComponent) colorpicker: ColorPickerComponent;
  @Output() viewChange: EventEmitter<string> = new EventEmitter();
  colour: string;
  selectedId: string;
  tabs = [{ id: 'selectColour', icon: 'brightness_1', content: "color-picker", lightsetting: "constant" }, { id: 'selectBeat', icon: 'graphic_eq', content: "bb-beat-colours", lightsetting: "beat" }];

  constructor(public settingsService: BeaterSettingsService) {
  }

  ngAfterViewInit() {
    this.refreshSettings();
  }

  saveSettings(): void {
    this.settingsService.saveSettings();
  }

  refreshSettings(): void {
    this.settingsService.refreshSettings({ complete: () => this.reset() });
  }

  reset(): void {
    if (this.settingsService.settings.power) {
      let foundTab = this.tabs.find(tab => tab.lightsetting == this.settingsService.settings.lightsetting);
      this.selectedId = foundTab ? foundTab.id : null;
    }
    if (this.colorpicker)
      this.colorpicker.setColor(this.settingsService.settings.colour)
  }

  tabSelect(id: string): void {
    this.selectedId = this.selectedId == id ? null : id;
    this.settingsService.settings.power = this.selectedId != null;
    let foundTab = this.tabs.find(item => item.id == this.selectedId);

    if (foundTab)
      this.settingsService.settings.lightsetting = foundTab.lightsetting;

    this.saveSettings();
  }

  isSelected(content: string): boolean {
    if (!content)
      return !this.selectedId;
    else {
      let foundTab = this.tabs.find(item => item.id == this.selectedId);
      return foundTab && foundTab.content == content;
    }
  }

  colourChange(change: string) {
    let Color = require('color');
    this.settingsService.settings.colour = Color(change).hex();
    this.saveSettings();
  }
}

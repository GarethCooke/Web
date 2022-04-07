/* eslint-disable semi */
import { Component } from '@angular/core';
import { IBeaterSettings } from './beater-settings/beater-settings';

@Component({
  selector: 'bb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'beater';
  settings: IBeaterSettings;
}

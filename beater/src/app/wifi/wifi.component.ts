import { Component } from '@angular/core';
import { WifiSetupComponent } from 'eelshared';

@Component({
  selector: 'bb-wifi',
  standalone: true,
  imports: [WifiSetupComponent],
  templateUrl: './wifi.component.html',
  styleUrls: ['./wifi.component.scss'],
})
export class WifiComponent {}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIcon } from '@angular/material/icon';
import { BeaterEventService } from '../beater-event.service';
import { IBeaterEvent } from './beater-event';
import { BeatDetectSettingsComponent } from './beat-detect-settings/beat-detect-settings.component';
import { EqualiserBarComponent } from './equaliser-bar/equaliser-bar.component';

@Component({
  selector: 'bb-graphic-equaliser',
  standalone: true,
  imports: [CommonModule, MatSidenavModule, BeatDetectSettingsComponent, EqualiserBarComponent, MatIcon],
  templateUrl: './graphic-equaliser.component.html',
  styleUrls: ['./graphic-equaliser.component.scss'],
})
export class GraphicEqualiserComponent implements OnInit {
  beaterEvent: IBeaterEvent | undefined = undefined;

  constructor(private eventService: BeaterEventService) {}

  ngOnInit(): void {
    this.subscribe();
  }

  private subscribe(): void {
    this.eventService.getServerSentEvent('/events').subscribe(
      (next) => (this.beaterEvent = next),
      (error) => {
        console.log('Events error ' + error);
        this.subscribe();
      }
    );
  }
}

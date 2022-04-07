import { Component, OnInit } from '@angular/core';
import { BeaterEventService } from '../beater-event.service';
import { IBeaterEvent } from './beater-event';

@Component({
  selector: 'bb-graphic-equaliser',
  templateUrl: './graphic-equaliser.component.html',
  styleUrls: ['./graphic-equaliser.component.scss']
})
export class GraphicEqualiserComponent implements OnInit {
  beaterEvent: IBeaterEvent;

  constructor(private eventService: BeaterEventService) { }

  ngOnInit(): void {
    this.subscribe();
  }

  private subscribe(): void {
    this.eventService.getServerSentEvent('/events').subscribe(next => this.beaterEvent = next, error => { console.log("Events error " + error); this.subscribe(); });
  }
}

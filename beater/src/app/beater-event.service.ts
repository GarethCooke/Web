import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { SseService } from 'eelshared';
import { IBeaterEvent } from './graphic-equaliser/beater-event';

@Injectable({
  providedIn: 'root',
})
export class BeaterEventService {
  constructor(private zone: NgZone, private sseService: SseService) {}

  getServerSentEvent(url: string) {
    return new Observable<IBeaterEvent>((subscribe) => {
      const eventSource = this.sseService.getEventSource(url);
      eventSource.onmessage = (event) => {
        this.zone.run(() => {
          let obj: IBeaterEvent = JSON.parse(event.data).msg;
          subscribe.next(obj);
        });
      };
      eventSource.onerror = (error) => {
        this.zone.run(() => {
          subscribe.error(error);
        });
      };
    });
  }
}

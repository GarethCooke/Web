import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IWAP } from '../wap';

@Component({
  selector: 'bb-wap-list',
  templateUrl: './wap-list.component.html',
  styleUrls: ['./wap-list.component.scss']
})
export class WapListComponent {
  @Input() waplist: IWAP[];
  @Output() wapChange: EventEmitter<IWAP> = new EventEmitter();
  selectedwap: IWAP;

  select(wapname: string): void {
    this.selectedwap = this.waplist.find(element => element.name === wapname);
    this.wapChange.emit(this.selectedwap);
  }
}

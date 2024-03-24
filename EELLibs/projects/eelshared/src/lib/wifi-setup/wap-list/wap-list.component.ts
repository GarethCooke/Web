import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IWAP } from '../wap';

@Component({
  selector: 'bb-wap-list',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './wap-list.component.html',
  styleUrls: ['./wap-list.component.scss'],
})
export class WapListComponent {
  @Input() waplist: IWAP[] | undefined = undefined;
  @Output() wapChange: EventEmitter<IWAP> = new EventEmitter();
  selectedwap: IWAP | undefined = undefined;

  select(wapname: string): void {
    if (this.waplist) {
      this.selectedwap = this.waplist.find((element) => element.name === wapname);
      this.wapChange.emit(this.selectedwap);
    }
  }
}

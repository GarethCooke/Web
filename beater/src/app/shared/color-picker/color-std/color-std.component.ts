import { Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { stdColours } from './stdColours';

@Component({
  selector: 'color-std',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './color-std.component.html',
  styleUrls: ['./color-std.component.scss'],
})
export class ColorStdComponent {
  colours: stdColours = new stdColours();

  @Output()
  color: EventEmitter<string> = new EventEmitter(true);

  @Input()
  selected: string | null = null;

  onMouseDown(evt: MouseEvent, element: HTMLElement): void {
    this.selected = element.style.getPropertyValue('background');
    this.color.emit('');
    this.color.emit(this.selected);
  }
}

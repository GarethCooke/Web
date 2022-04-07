/* eslint-disable semi */
import { OnChanges, SimpleChanges } from '@angular/core';
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  HostListener,
  EventEmitter,
  Input,
} from '@angular/core';
import { RGBCanvas } from '../rgbcanvas';

@Component({
  selector: 'color-slider',
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss'],
})
export class ColorSliderComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement>;

  @Output()
  colorChange: EventEmitter<string> = new EventEmitter();

  @Input()
  color: string;

  private Color = require('color');
  private ctx: CanvasRenderingContext2D;
  private mousedown = false;
  private selectedHeight: number;

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    if (!this.canvas || !this.canvas.nativeElement)
      return;
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d');
    }
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    this.ctx.clearRect(0, 0, width, height);

    const gradient = this.ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, this.Color.rgb(255, 0, 0));
    gradient.addColorStop(0.17, this.Color.rgb(255, 255, 0));
    gradient.addColorStop(0.34, this.Color.rgb(0, 255, 0));
    gradient.addColorStop(0.51, this.Color.rgb(0, 255, 255));
    gradient.addColorStop(0.68, this.Color.rgb(0, 0, 255));
    gradient.addColorStop(0.85, this.Color.rgb(255, 0, 255));
    gradient.addColorStop(1, this.Color.rgb(255, 0, 0));

    this.ctx.beginPath();
    this.ctx.rect(0, 0, width, height);

    this.ctx.fillStyle = gradient;
    this.ctx.fill();
    this.ctx.closePath();

    if (this.selectedHeight != undefined) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 5;
      this.ctx.rect(0, this.selectedHeight - 5, width, 10);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(): void {
    this.mousedown = false;
  }

  onMouseDown(evt: MouseEvent): void {
    this.mousedown = true;
    this.selectedHeight = evt.offsetY;
    this.draw();
    this.setColor(evt);
  }

  onMouseMove(evt: MouseEvent): void {
    if (this.mousedown) {
      this.selectedHeight = evt.offsetY;
      this.draw();
      this.setColor(evt);
    }
  }

  setColor(evt: MouseEvent): void {
    this.color = this.getColorAtPosition(evt.offsetX, evt.offsetY);
    this.colorChange.emit(this.color);
  }

  getColorAtPosition(x: number, y: number): string {
    const imageData = this.ctx.getImageData(10, y, 1, 1).data;
    let color = this.Color.rgb(imageData[0], imageData[1], imageData[2]);
    return color;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.color && !this.mousedown) {
      if (!this.mousedown) {
        this.selectedHeight = changes.color.currentValue == this.Color.rgb(255, 255, 255) ? undefined : this.findColorPosition(changes.color.currentValue);
        this.draw();
      }
    }
  }

  findColorPosition(colour: string): number {
    if (this.canvas && this.canvas.nativeElement) {
      const height = this.canvas.nativeElement.height;
      const imageData: ImageData = this.ctx.getImageData(0, 0, 1, height);
      let findColor = this.Color(colour);
      let findHSL = this.Color(colour);
      let found = RGBCanvas.findColorPos(this.Color.hsl(findHSL.hue(), 100, 50), imageData, 10);
      if (found)
        return found[1];
      return null;
    }
  }
}

import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, ViewChild, ElementRef, AfterViewInit, Output, HostListener, EventEmitter, Input } from '@angular/core';
import { RGBCanvas } from '../rgbcanvas';
import Color from 'color';

@Component({
  selector: 'color-slider',
  standalone: true,
  imports: [],
  templateUrl: './color-slider.component.html',
  styleUrls: ['./color-slider.component.scss'],
})
export class ColorSliderComponent implements AfterViewInit, OnChanges {
  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement> | null = null;

  @Output()
  colorChange: EventEmitter<string> = new EventEmitter();

  @Input()
  color: string = '';

  private ctx: CanvasRenderingContext2D | null = null;
  private mousedown = false;
  private selectedHeight: number | undefined = undefined;

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    if (!this.canvas || !this.canvas.nativeElement) return;
    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d', { willReadFrequently: true });
    }
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    this.ctx!.clearRect(0, 0, width, height);

    const gradient = this.ctx!.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, Color.rgb(255, 0, 0).string());
    gradient.addColorStop(0.17, Color.rgb(255, 255, 0).string());
    gradient.addColorStop(0.34, Color.rgb(0, 255, 0).string());
    gradient.addColorStop(0.51, Color.rgb(0, 255, 255).string());
    gradient.addColorStop(0.68, Color.rgb(0, 0, 255).string());
    gradient.addColorStop(0.85, Color.rgb(255, 0, 255).string());
    gradient.addColorStop(1, Color.rgb(255, 0, 0).string());

    this.ctx!.beginPath();
    this.ctx!.rect(0, 0, width, height);

    this.ctx!.fillStyle = gradient;
    this.ctx!.fill();
    this.ctx!.closePath();

    if (this.selectedHeight != undefined) {
      this.ctx!.beginPath();
      this.ctx!.strokeStyle = 'white';
      this.ctx!.lineWidth = 5;
      this.ctx!.rect(0, this.selectedHeight - 5, width, 10);
      this.ctx!.stroke();
      this.ctx!.closePath();
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
    if (this.ctx) {
      const imageData = this.ctx.getImageData(10, y, 1, 1).data;
      let color = Color.rgb(imageData[0], imageData[1], imageData[2]).string();
      return color;
    }
    return '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['color'] && !this.mousedown) {
      if (!this.mousedown && this.selectedHeight) {
        this.selectedHeight = changes['color'].currentValue == Color.rgb(255, 255, 255) ? undefined : this.findColorPosition(changes['color'].currentValue) || undefined;
        this.draw();
      }
    }
  }

  findColorPosition(colour: string): number | null {
    if (this.canvas && this.canvas.nativeElement && this.ctx) {
      const height = this.canvas.nativeElement.height;
      const imageData: ImageData = this.ctx.getImageData(0, 0, 1, height);
      let findColor = Color(colour);
      let findHSL = Color(colour);
      let found = RGBCanvas.findColorPos(Color.hsl(findHSL.hue(), 100, 50).string(), imageData, 10);
      if (found) return found[1];
    }
    return null;
  }
}

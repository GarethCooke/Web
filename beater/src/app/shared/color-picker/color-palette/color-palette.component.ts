import { Component, ViewChild, ElementRef, AfterViewInit, Input, Output, SimpleChanges, OnChanges, EventEmitter, HostListener } from '@angular/core';
import { RGBCanvas } from '../rgbcanvas';
import Color from 'color';

@Component({
  selector: 'color-palette',
  standalone: true,
  imports: [],
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
})
export class ColorPaletteComponent implements AfterViewInit, OnChanges {
  @Input()
  hue: string = '';

  @Input()
  inputColor: string = '';

  @Output()
  color: EventEmitter<string> = new EventEmitter(true);

  @Output()
  colorSet: EventEmitter<string> = new EventEmitter();

  @ViewChild('canvas')
  canvas: ElementRef<HTMLCanvasElement> | null = null;

  private ctx: CanvasRenderingContext2D | null = null;
  private mousedown = false;
  public selectedPosition: { x: number; y: number } | null = null;

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    if (!this.canvas) return;

    if (!this.ctx) {
      this.ctx = this.canvas.nativeElement.getContext('2d', { willReadFrequently: true });
    }
    const width = this.canvas.nativeElement.width;
    const height = this.canvas.nativeElement.height;

    var thisHSL: any;
    let thisHue = Color(this.hue);
    if (!thisHue.hsl().hue() && !thisHue.saturationl()) thisHSL = Color.rgb(255, 255, 255);
    else thisHSL = Color.hsl(thisHue.hue(), 100, 50);
    this.ctx!.fillStyle = this.hue ? thisHSL : 'rgba(255,255,255,1)';
    this.ctx!.fillRect(0, 0, width, height);

    const whiteGrad = this.ctx!.createLinearGradient(0, 0, width, 0);
    whiteGrad.addColorStop(0, 'rgba(255,255,255,1)');
    whiteGrad.addColorStop(1, 'rgba(255,255,255,0)');

    this.ctx!.fillStyle = whiteGrad;
    this.ctx!.fillRect(0, 0, width, height);

    const blackGrad = this.ctx!.createLinearGradient(0, 0, 0, height);
    blackGrad.addColorStop(0, 'rgba(0,0,0,0)');
    blackGrad.addColorStop(1, 'rgba(0,0,0,1)');

    this.ctx!.fillStyle = blackGrad;
    this.ctx!.fillRect(0, 0, width, height);

    if (this.selectedPosition) {
      this.ctx!.strokeStyle = 'white';
      this.ctx!.fillStyle = 'white';
      this.ctx!.beginPath();
      this.ctx!.arc(this.selectedPosition.x, this.selectedPosition.y, 10, 0, 2 * Math.PI);
      this.ctx!.lineWidth = 5;
      this.ctx!.stroke();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputColor'] && changes['inputColor'].currentValue) {
      this.setColor(changes['inputColor'].currentValue);
      this.draw();
    }
    if (changes['hue'] && changes['hue'].currentValue != '') {
      this.draw();
      const pos = this.selectedPosition;
      if (pos) this.color.emit(this.getColorAtPosition(pos.x, pos.y));
    }
  }

  @HostListener('window:mouseup', ['$event'])
  onMouseUp(): void {
    this.mousedown = false;
    const pos = this.selectedPosition;
    if (pos) this.colorSet.emit(this.getColorAtPosition(pos.x, pos.y));
  }

  onMouseDown(evt: MouseEvent): void {
    this.mousedown = true;
    this.selectedPosition = { x: evt.offsetX, y: evt.offsetY };
    this.draw();
    this.color.emit(this.getColorAtPosition(evt.offsetX, evt.offsetY));
  }

  onMouseMove(evt: MouseEvent): void {
    if (this.mousedown) {
      this.selectedPosition = { x: evt.offsetX, y: evt.offsetY };
      this.draw();
      this.emitColor(evt.offsetX, evt.offsetY);
    }
  }

  emitColor(x: number, y: number): void {
    const rgbaColor = this.getColorAtPosition(x, y);
    this.color.emit(rgbaColor);
  }

  getColorAtPosition(x: number, y: number): string {
    if (this.ctx) {
      const imageData = this.ctx.getImageData(x, y, 1, 1).data;
      return Color.rgb(imageData[0], imageData[1], imageData[2]).rgb().toString();
    }
    return '';
  }

  setColor(value: string): void {
    if (this.canvas && this.ctx) {
      this.inputColor = value;
      this.hue = value;

      const width = this.canvas.nativeElement.width;
      const height = this.canvas.nativeElement.height;
      this.draw();
      let foundPos = RGBCanvas.findColorPos(this.inputColor, this.ctx.getImageData(0, 0, width, height), 3);
      if (foundPos) {
        this.selectedPosition = { x: foundPos[0], y: foundPos[1] };
      } else this.selectedPosition = null;

      this.draw();
    }
  }
}

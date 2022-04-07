import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from "@angular/material/dialog";
import { IColorChange } from '../color-change';

@Component({
  selector: 'bb-color-dialog',
  templateUrl: './color-dialog.component.html',
  styleUrls: ['./color-dialog.component.scss']
})
export class ColorDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  colourChange(change: string) {
    let observer: IColorChange = this.data.observer as IColorChange;
    observer.colorChange(change);
  }
}

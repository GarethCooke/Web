/* eslint-disable semi */
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ColorPickerModule } from './color-picker/color-picker.module';
import { WifiSetupComponent } from './wifi-setup/wifi-setup.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WapListComponent } from './wifi-setup/wap-list/wap-list.component';
import { FormsModule } from '@angular/forms';
import { ColorDialogComponent } from './color-picker/color-dialog/color-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [WifiSetupComponent, WapListComponent, ColorDialogComponent],
  imports: [CommonModule, MatInputModule, MatFormFieldModule, ColorPickerModule, MatButtonModule, MatIconModule, HttpClientModule, FormsModule, MatDialogModule],
  exports: [ColorPickerModule, WifiSetupComponent]
})
export class SharedModule { }

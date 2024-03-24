import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatLabel } from '@angular/material/form-field';
import { WiFiConnect } from './wifi-connect';
import { IWifiInfo } from './wifi-info';
import { WifiSelectService } from './wifi-select.service';
import { WapListComponent } from './wap-list/wap-list.component';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'wifi-setup',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, WapListComponent, MatIcon, MatFormField, MatLabel],
  templateUrl: './wifi-setup.component.html',
  styleUrls: ['./wifi-setup.component.scss'],
})
export class WifiSetupComponent implements OnInit {
  wifiinfo: IWifiInfo | null = null;
  errorMessage: string = '';
  wifi: WiFiConnect = new WiFiConnect();
  @ViewChild(WapListComponent) waplist: WapListComponent | null = null;

  constructor(private wifiSelectService: WifiSelectService) {}

  ngOnInit(): void {
    this.refreshWifiList();
  }

  onSubmit(form: NgForm): void {
    this.wifiSelectService.saveNetworkSetup(this.wifi);
    this.refresh(form);
  }

  refreshWifiList(): void {
    this.wifiSelectService.getWifiData().subscribe({
      next: (wifiinfo) => {
        this.wifiinfo = wifiinfo;
      },
      error: (err) => (this.errorMessage = err),
    });
  }

  refresh(form: NgForm): void {
    if (this.waplist) this.waplist.selectedwap = this.wifi.wap = undefined;
    form.reset();
    this.refreshWifiList();
  }
}

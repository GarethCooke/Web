import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { WiFiConnect } from './wifi-connect';
import { IWifiInfo } from './wifi-info';
import { WifiSelectService } from './wifi-select.service';
import { WapListComponent } from './wap-list/wap-list.component';

@Component({
  selector: 'wifi-setup',
  templateUrl: './wifi-setup.component.html',
  styleUrls: ['./wifi-setup.component.scss']
})
export class WifiSetupComponent implements OnInit {
  wifiinfo: IWifiInfo;
  errorMessage: string;
  wifi: WiFiConnect = new WiFiConnect();
  @ViewChild(WapListComponent) waplist: WapListComponent;

  constructor(private router: Router, private wifiSelectService: WifiSelectService) {
  }

  ngOnInit(): void {
    this.refreshWifiList();
  }

  onSubmit(form: NgForm): void {
    // setup the visuals and redirect after 10 seconds
    // let connected_SSID = document.getElementById("connected_SSID");
    // connected_SSID.innerHTML = "Saving...";
    // connected_SSID.style = "color:black";
    // document.getElementById("wifi_connected").hidden = true;
    // document.getElementById("preloader").classList.add("active");
    // setTimeout("location.href = 'index.html';", 10000);

    this.wifiSelectService.saveNetworkSetup(this.wifi);
    this.waplist.selectedwap = this.wifi.wap = undefined;
    form.reset();
    this.router.navigateByUrl("/payment");
  }

  refreshWifiList(): void {
    this.wifiSelectService.getWifiData().subscribe({
      next: wifiinfo => {
        this.wifiinfo = wifiinfo;
      },
      error: err => this.errorMessage = err
    });
  }

  refresh(form: NgForm): void {
    this.refreshWifiList();
    this.waplist.selectedwap = this.wifi.wap = undefined;
    form.reset();
  }
}

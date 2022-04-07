import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { WiFiConnect } from './wifi-connect';
import { IWifiInfo } from './wifi-info';


@Injectable({
  providedIn: 'root'
})
export class WifiSelectService {
  private urlGet = 'api/networkdata';
  private urlSet = 'api/networkset';

  constructor(private http: HttpClient) { }

  getWifiData(): Observable<IWifiInfo> {
    return this.http.get<IWifiInfo>(this.urlGet).pipe(catchError(this.handleError));
  }

  saveNetworkSetup(selectedNetwork: WiFiConnect): void {

    class SaveData {
      constructor(selectedNetwork: WiFiConnect) { this.SSID = selectedNetwork.wap.name; this.pwd = selectedNetwork.password; }
      SSID: string;
      pwd: string
    }

    const data: SaveData = new SaveData(selectedNetwork);
    this.http.post<IWifiInfo>(this.urlSet, data).subscribe(
      (res) => { },
      (err) => console.log(err)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    }
    else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

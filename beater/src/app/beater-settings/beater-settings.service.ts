import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompletionObserver, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IBeatCycleColour } from './beat-cycle-colour';
import { IBeaterSettings } from './beater-settings';

@Injectable({
  providedIn: 'root',
})
export class BeaterSettingsService {
  private url = 'api/settings';
  settings: IBeaterSettings | undefined = undefined;
  private errorMessage: string = '';

  constructor(private http: HttpClient) {
    this.refreshSettings({ complete: () => {} });
  }

  getSettings(): Observable<IBeaterSettings> {
    return this.http.get<IBeaterSettings>(this.url).pipe(catchError(this.handleError));
  }

  saveSettings(): void {
    this.http.post<IBeaterSettings>(this.url, this.settings).subscribe(
      (res) => {},
      (err) => console.log(err)
    );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

  refreshSettings(completeObserver: CompletionObserver<IBeaterSettings>): void {
    this.getSettings().subscribe({
      next: (settings) => {
        this.settings = settings;
      },
      error: (err) => (this.errorMessage = err),
      complete: () => completeObserver.complete(),
    });
  }

  add(beatdata: IBeatCycleColour): void {
    this.settings?.cyclecolours.push(beatdata);
  }
}

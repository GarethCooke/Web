/* eslint-disable semi */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouteReuseStrategy } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BeatColourListComponent } from './colour/beat-colours/beat-colour-list/beat-colour-list.component';
import { TxtMessageComponent } from './txt-message/txt-message.component';
// import { NgMarqueeModule } from 'ng-marquee';
import { GraphicEqualiserComponent } from './graphic-equaliser/graphic-equaliser.component';
import { EqualiserBarComponent } from './graphic-equaliser/equaliser-bar/equaliser-bar.component';
import { BeatDetectSettingsComponent } from './graphic-equaliser/beat-detect-settings/beat-detect-settings.component';
import { BeatPeriodComponent } from './colour/beat-colours/beat-period/beat-period.component';
import { BeatColoursComponent } from './colour/beat-colours/beat-colours.component';
import { AppRouteReuseStrategyService } from './app-route-reuse-strategy.service';
import { WifiComponent } from './wifi/wifi.component';
import { ColourComponent } from './colour/colour.component';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, ColourComponent, WifiComponent, BeatColoursComponent, BeatPeriodComponent, BeatColourListComponent, TxtMessageComponent, GraphicEqualiserComponent, EqualiserBarComponent, BeatDetectSettingsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatButtonToggleModule,
    SharedModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSliderModule,
    FormsModule,
    DragDropModule,
    //    NgMarqueeModule,
    MatSidenavModule,
    MatGridListModule,
    MatFormFieldModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: AppRouteReuseStrategyService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { Routes } from '@angular/router';
import { ColourComponent } from './colour/colour.component';

import { GraphicEqualiserComponent } from './graphic-equaliser/graphic-equaliser.component';
import { TxtMessageComponent } from './txt-message/txt-message.component';
import { WifiComponent } from 'src/app/wifi/wifi.component';
import { inject } from '@angular/core';
import { BeaterEventService } from './beater-event.service';
import { BeaterSettingsService } from './beater-settings/beater-settings.service';

export const routes: Routes = [
  { path: 'bb-colour', component: ColourComponent, canActivate: [() => inject(BeaterSettingsService)?.settings?.capabilities?.led] },
  { path: 'bb-wifi', component: WifiComponent, canActivate: [() => inject(BeaterSettingsService)?.settings?.capabilities?.wifi] },
  { path: 'bb-txt-message', component: TxtMessageComponent, canActivate: [() => inject(BeaterSettingsService)?.settings?.capabilities?.text_message] },
  { path: 'bb-graphic-equaliser', component: GraphicEqualiserComponent, canActivate: [() => inject(BeaterSettingsService)?.settings?.capabilities?.equaliser] },
  { path: '', redirectTo: 'bb-colour', pathMatch: 'full' },
  { path: '**', redirectTo: 'bb-colour', pathMatch: 'full' },
];

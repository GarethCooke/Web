import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ColourComponent } from './colour/colour.component';
import { GraphicEqualiserComponent } from './graphic-equaliser/graphic-equaliser.component';
import { TxtMessageComponent } from './txt-message/txt-message.component';
import { WifiComponent } from './wifi/wifi.component';

const routes: Routes = [
  { path: 'bb-colour', component: ColourComponent },
  { path: 'bb-wifi', component: WifiComponent },
  { path: 'bb-txt-message', component: TxtMessageComponent },
  { path: 'bb-graphic-equaliser', component: GraphicEqualiserComponent },
  { path: '', redirectTo: 'bb-colour', pathMatch: 'full' },
  { path: '**', redirectTo: 'bb-colour', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

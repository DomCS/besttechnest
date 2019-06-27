import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AudioComponent } from './audio/audio.component';
import { DealsComponent } from './deals/deals.component';
import { DesktopPeripheralsComponent } from './desktop-peripherals/desktop-peripherals.component';
import { PcComponentsComponent } from './pc-components/pc-components.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VrComponent } from './vr/vr.component';
import { HomeAudioComponent } from './home-audio/home-audio.component';
import { CellularComponent } from './cellular/cellular.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'audio', component: AudioComponent},
  {path: 'cellular', component: CellularComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'deals', component: DealsComponent},
  {path: 'desktopPeripherals', component: DesktopPeripheralsComponent},
  {path: 'homeAudio', component: HomeAudioComponent},
  {path: 'pcComponents', component:PcComponentsComponent},
  {path: 'reviews', component: ReviewsComponent},
  {path: 'vr', component:VrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

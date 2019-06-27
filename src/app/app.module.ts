import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AudioComponent } from './audio/audio.component';
import { DealsComponent } from './deals/deals.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DesktopPeripheralsComponent } from './desktop-peripherals/desktop-peripherals.component';
import { PcComponentsComponent } from './pc-components/pc-components.component';
import { HomeAudioComponent } from './home-audio/home-audio.component';
import { VrComponent } from './vr/vr.component';
import { CellularComponent } from './cellular/cellular.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    AudioComponent,
    DealsComponent,
    ReviewsComponent,
    AboutComponent,
    ContactComponent,
    DesktopPeripheralsComponent,
    PcComponentsComponent,
    HomeAudioComponent,
    VrComponent,
    CellularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

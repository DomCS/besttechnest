import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

import { AngularFireAuthModule } from 'angularfire2/auth';

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
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { StoreComponent } from './store/store.component';
import { CellPhonesComponent } from './cell-phones/cell-phones.component';
import { environment } from 'src/environments/environment';
import { ComputerComponent } from './computer/computer.component';
import { SoftwareComponent } from './software/software.component';
import { EmailComponent } from './cell-phones/email/email.component';
import { LoginComponent } from './login/login.component';



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
    CellularComponent,
    TutorialsComponent,
    StoreComponent,
    CellPhonesComponent,
    ComputerComponent,
    SoftwareComponent,
    EmailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }],
  bootstrap: [AppComponent]
  
})
export class AppModule { }

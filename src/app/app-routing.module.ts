import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { CellPhonesComponent } from './cell-phones/cell-phones.component';
import { EmailComponent } from './cell-phones/email/email.component';
import { ComputerComponent } from './computer/computer.component';
import { SoftwareComponent } from './software/software.component';
import { ContactComponent } from './contact/contact.component';
import { DealsComponent } from './deals/deals.component';
import { AboutComponent } from './about/about.component';
import { AudioComponent } from './audio/audio.component';
import { DesktopPeripheralsComponent } from './desktop-peripherals/desktop-peripherals.component';
import { PcComponentsComponent } from './pc-components/pc-components.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { VrComponent } from './vr/vr.component';
import { HomeAudioComponent } from './home-audio/home-audio.component';
import { CellularComponent } from './cellular/cellular.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path: ' ', component: HomeComponent},
  {path: 'tutorials', component: TutorialsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'store', component: DealsComponent},
  {path: 'cellPhones', component: CellPhonesComponent},
  {path: 'cellPhones/email', component: EmailComponent},
  {path: 'computer', component: ComputerComponent},
  {path: 'software', component: SoftwareComponent},
  {path: 'login', component: LoginComponent}    
  //  {path: 'audio', component: AudioComponent},
//  {path: 'cellular', component: CellularComponent},
  
//  {path: 'desktopPeripherals', component: DesktopPeripheralsComponent},
//  {path: 'homeAudio', component: HomeAudioComponent},
//  {path: 'pcComponents', component:PcComponentsComponent},
  
//  {path: 'vr', component:VrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

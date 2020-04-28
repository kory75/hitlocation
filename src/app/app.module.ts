import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HitLocationComponent } from './hit-location/hit-location.component';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HitLocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-1599062805138474',
      //adSlot: 7259870550,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

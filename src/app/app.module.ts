import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HitLocationComponent } from './hit-location/hit-location.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { AdsenseModule } from 'ng2-adsense';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HitTableComponent } from './hit-table/hit-table.component';
import { LocationService } from './location.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HitLocationComponent,
    HitTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-1599062805138474',
      //adSlot: 7259870550,
    }),
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  providers: [
    LocationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HitLocationComponent } from './hit-location/hit-location.component';
import { HitTableComponent } from './hit-table/hit-table.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hitlocation', component: HitLocationComponent },
  { path: 'hittable', component: HitTableComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

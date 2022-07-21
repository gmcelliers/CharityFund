import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { HowComponent } from './how/how.component';
import { CharitiesComponent } from './charities/charities.component';

const routes: Routes = [{path:'', component:LandingComponent},{path:'account',component:AccountComponent},{path:'how', component:HowComponent}, {path:'charities', component:CharitiesComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

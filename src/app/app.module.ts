import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AccountComponent } from './account/account.component';
import { HowComponent } from './how/how.component';
import { CharitiesComponent } from './charities/charities.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AccountComponent,
    HowComponent,
    CharitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

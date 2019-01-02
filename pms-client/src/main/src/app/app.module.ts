import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicComponent } from './public/public.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PmsCostDashboardComponent} from "../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    DashboardComponent,
    PmsCostDashboardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

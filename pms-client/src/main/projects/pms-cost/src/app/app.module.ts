import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {PmsCostDashboardModule} from "./pms-cost-dashboard/pms-cost-dashboard.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PmsCostDashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

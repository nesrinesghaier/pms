import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmsScrumDashboardComponent } from './pms-scrum-dashboard/pms-scrum-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsScrumDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

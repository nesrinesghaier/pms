import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmsGanttDashboardComponent } from './pms-gantt-dashboard/pms-gantt-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsGanttDashboardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

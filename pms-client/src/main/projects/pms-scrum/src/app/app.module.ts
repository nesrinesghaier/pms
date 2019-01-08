import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmsScrumDashboardComponent } from './pms-scrum-dashboard/pms-scrum-dashboard.component';
import { StateComponent } from './pms-scrum-dashboard/state/state.component';
import { PmsScrumStateComponent } from './pms-scrum-dashboard/pms-scrum-state/pms-scrum-state.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsScrumDashboardComponent,
    StateComponent,
    PmsScrumStateComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmsScrumDashboardComponent } from './pms-scrum-dashboard/pms-scrum-dashboard.component';
import { StateComponent } from './pms-scrum-dashboard/state/state.component';
import { PmsScrumStateComponent } from './pms-scrum-dashboard/pms-scrum-state/pms-scrum-state.component';
import { PmsScrumStoryComponent } from './pms-scrum-dashboard/pms-scrum-story/pms-scrum-story.component';
import { PmsScrumTaskComponent } from './pms-scrum-dashboard/pms-scrum-task/pms-scrum-task.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsScrumDashboardComponent,
    StateComponent,
    PmsScrumStateComponent,
    PmsScrumStoryComponent,
    PmsScrumTaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

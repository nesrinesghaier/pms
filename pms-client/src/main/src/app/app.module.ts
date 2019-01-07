import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PublicComponent} from './public/public.component';
import {HttpClientModule} from '@angular/common/http';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MainComponent} from './dashboard/main/main.component';
import {PmsCostDashboardComponent} from '../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component';
import {PmsGanttDashboardComponent} from '../../projects/pms-gantt/src/app/pms-gantt-dashboard/pms-gantt-dashboard.component';
import {ProjectListComponent} from './dashboard/projects/project-list/project-list.component';
import {ProjectFormComponent} from './dashboard/projects/project-form/project-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    DashboardComponent,
    ProjectListComponent,
    ProjectFormComponent,
    MainComponent,
    PmsCostDashboardComponent,
    PmsGanttDashboardComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModalModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ProjectFormComponent
  ]
})
export class AppModule {
}

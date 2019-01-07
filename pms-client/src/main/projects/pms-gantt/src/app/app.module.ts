import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PmsGanttDashboardComponent } from './pms-gantt-dashboard/pms-gantt-dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../src/app/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';
import {ResizableModule} from 'angular-resizable-element';
import {ChartComponent} from './chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    PmsGanttDashboardComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule, FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    ResizableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { GanttComponent } from '../../projects/pms-gantt/src/app/gantt/gantt.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

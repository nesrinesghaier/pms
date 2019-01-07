import { Component } from '@angular/core';
import {Project} from '../../models/project';

@Component({
  selector: 'pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  p: Project;
constructor() {
}
  title = 'pms-client';
}

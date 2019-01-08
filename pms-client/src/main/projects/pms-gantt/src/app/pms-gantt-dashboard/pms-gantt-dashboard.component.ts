import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../src/app/services/project.service';
import * as Moment from 'moment';
import {extendMoment} from 'moment-range';


@Component({
  selector: 'pms-gantt-pms-gantt-dashboard',
  templateUrl: './pms-gantt-dashboard.component.html',
  styleUrls: ['./pms-gantt-dashboard.component.css']
})
export class PmsGanttDashboardComponent implements OnInit {

  constructor(private service: ProjectService) {

  }

  ngOnInit(): void {
  }
}

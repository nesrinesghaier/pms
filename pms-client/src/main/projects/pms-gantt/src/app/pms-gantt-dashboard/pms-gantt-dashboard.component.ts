import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../src/app/services/project.service';
import {Project} from '../../../../../src/app/models/project';
import {Router} from '@angular/router';


import * as Moment from 'moment';
import {Step} from '../models/step';

@Component({
  selector: 'pms-gantt-pms-gantt-dashboard',
  templateUrl: './pms-gantt-dashboard.component.html',
  styleUrls: ['./pms-gantt-dashboard.component.css']
})
export class PmsGanttDashboardComponent implements OnInit {
  moment = Moment;
  search = '';
  charts: Array<Step>;
  storageKey = 'charts';

  constructor(private service: ProjectService, private router: Router) {
  }

  ngOnInit() {
    const store = localStorage.getItem('charts');
    if (store) {
      this.charts = JSON.parse(store);
    } else {
      this.charts = [];
      localStorage.setItem('charts', JSON.stringify([]));
    }
    // format dates
    this.charts.forEach((chart) => {
      chart.dates.start = this.moment(chart.dates.start).format('MM/DD');
      chart.dates.end = this.moment(chart.dates.end).format('MM/DD');
    });
  }

  get() {
    const p = new Project('posted from front', 'test', 'tesy', 'wjhxgs', Array<any>(), Array<any>());
    this.service.postProject(p).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createChart() {
    const start = this.moment().format('YYYY-MM-DD');
    const end = this.moment().add(7, 'days').format('YYYY-MM-DD');
    const chart = {
      'name': 'New Project',
      'progress': 0,
      'dates': {
        'start': start,
        'end': end,
      },
      'steps': []
    } as Step;
    this.charts.push(chart);
    console.log(this.charts.length);
    this.router.navigate(['charts', this.charts.indexOf(chart)]); // navigate to new chart
  }

  deleteChart(i: number) {
    if (confirm('Delete this chart?')) {
      const charts = JSON.parse(localStorage.getItem(this.storageKey));
      charts.splice(i, 1); // remove specific chart from array
      localStorage.setItem(this.storageKey, JSON.stringify(charts)); // save to storage
      this.charts.splice(i, 1); // udpate chart display
    }
  }


}

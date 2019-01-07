import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../../../../services/project.service';
import {Project} from '../../../../../models/project';

@Component({
  selector: 'pms-gantt-pms-gantt-dashboard',
  templateUrl: './pms-gantt-dashboard.component.html',
  styleUrls: ['./pms-gantt-dashboard.component.css']
})
export class PmsGanttDashboardComponent implements OnInit {

  constructor(private service: ProjectService) { }

  ngOnInit() {
  }

  get() {
    const p = new Project('posted from front', 'test', 'tesy', 'wjhxgs', Array<any>(), Array<any>());
    this.service.postProject(p).subscribe((data) => {
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

}

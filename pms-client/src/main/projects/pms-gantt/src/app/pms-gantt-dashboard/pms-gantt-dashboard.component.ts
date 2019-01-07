import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../../../src/app/services/project.service';
import {Project} from '../../../../../src/app/models/project';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pms-gantt-pms-gantt-dashboard',
  templateUrl: './pms-gantt-dashboard.component.html',
  styleUrls: ['./pms-gantt-dashboard.component.css']
})
export class PmsGanttDashboardComponent implements OnInit {


  currentProjectId: any;

  constructor(private service: ProjectService,
              private route: ActivatedRoute) {
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
      console.log(this.currentProjectId);
    });
  }

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

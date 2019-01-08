import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../../../src/app/services/project.service';
import {PmsScrumStateComponent} from './pms-scrum-state/pms-scrum-state.component';

@Component({
  selector: 'pms-scrum-dashboard',
  templateUrl: './pms-scrum-dashboard.component.html',
  styleUrls: ['./pms-scrum-dashboard.component.css']
})
export class PmsScrumDashboardComponent implements OnInit {
  @ViewChild('TODO') todoState: PmsScrumStateComponent;
  @ViewChild('INPROGRESS') inProgressState: PmsScrumStateComponent;
  @ViewChild('DONE') doneState: PmsScrumStateComponent;

  currentProjectId: any;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) {
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
    });
  }

  ngOnInit() {
  }

}

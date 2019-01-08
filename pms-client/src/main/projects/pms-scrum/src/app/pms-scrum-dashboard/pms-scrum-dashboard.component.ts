import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'pms-scrum-pms-scrum-dashboard',
  templateUrl: './pms-scrum-dashboard.component.html',
  styleUrls: ['./pms-scrum-dashboard.component.css']
})
export class PmsScrumDashboardComponent implements OnInit {

  currentProjectId: any;

  constructor(private route: ActivatedRoute) {
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
    });
  }

  ngOnInit() {
  }

}

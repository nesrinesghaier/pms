import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pms-cost-dashboard',
  templateUrl: './pms-cost-dashboard.component.html',
  styleUrls: ['./pms-cost-dashboard.component.css']
})
export class PmsCostDashboardComponent implements OnInit {

  currentProjectId: any;

  constructor(private route: ActivatedRoute) {
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
      console.log(this.currentProjectId);
    });
  }

  ngOnInit() {
  }

}

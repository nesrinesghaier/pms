import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'pms-project-view',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.css']
})
export class ProjectViewComponent implements OnInit {

  currentId: any;

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.currentId = params['id'];
    });
  }

  ngOnInit() {
  }

}

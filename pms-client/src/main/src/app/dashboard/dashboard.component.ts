import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ProjectService} from '../services/project.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ProjectFormComponent} from './projects/project-form/project-form.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router,
              private projectDialog: NgbModal,
              private projectService: ProjectService) {
  }

  ngOnInit() {
  }

  createProject() {
    this.projectService.initializeFormGroup();
    const modalProject = this.projectDialog.open(ProjectFormComponent);
    modalProject.componentInstance.name = 'Project';
  }
}

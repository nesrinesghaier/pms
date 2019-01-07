import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {MatDialogRef} from '@angular/material';
import {Project} from '../../../models/project';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'pms-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private service: ProjectService,
              public activeModal: NgbActiveModal) {
  }

  ngOnInit() {
  }

  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit() {
    if (this.service.form.valid) {
      if (!this.service.form.get('id').value) {
        const project = this.service.form.value;
        project.creationDate = new Date(Date.now()).toLocaleString();
        console.log(project);
    //     //this.service.postProject(project);
      } else {
    //     //this.service.updateProject(this.service.form.value);
      }
      this.service.form.reset();
      this.service.initializeFormGroup();
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.activeModal.close('Close click');
  }
}

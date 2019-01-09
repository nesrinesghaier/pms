import {Component, OnInit} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'pms-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private service: ProjectService,
              public dialogRef: MatDialogRef<ProjectFormComponent>) {
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
        this.service.postProject(project).subscribe();
      } else {
        this.service.updateProject(this.service.form.value).subscribe();
      }
      this.onClose();
    }
  }

  onClose() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
}

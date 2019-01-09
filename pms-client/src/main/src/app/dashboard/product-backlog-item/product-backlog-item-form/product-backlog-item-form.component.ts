import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {BacklogItemService} from '../../../services/backlog-item.service';

@Component({
  selector: 'pms-product-backlog-item-form',
  templateUrl: './product-backlog-item-form.component.html',
  styleUrls: ['./product-backlog-item-form.component.css']
})
export class ProductBacklogItemFormComponent implements OnInit {
  currentProjectId: any;

  constructor(private service: BacklogItemService,
              public dialogRef: MatDialogRef<ProductBacklogItemFormComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) {
    this.currentProjectId = data.currentProjectId;

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
        const backlogItem = this.service.form.value;
        backlogItem.creationDate = new Date(Date.now()).toLocaleString();
        this.service.addProductBacklogItem(this.currentProjectId, backlogItem).subscribe();
      } else {
        this.service.updateProductBacklogItem(this.service.form.value).subscribe();
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

import {Component, OnInit, ViewChild} from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MAT_DIALOG_DATA,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectService} from '../../../services/project.service';
import {BacklogItemService} from '../../../services/backlog-item.service';
import {ProductBacklogItemFormComponent} from '../product-backlog-item-form/product-backlog-item-form.component';
import {Project} from '../../../models/project';

@Component({
  selector: 'pms-product-backlog-item-list',
  templateUrl: './product-backlog-item-list.component.html',
  styleUrls: ['./product-backlog-item-list.component.css']
})
export class ProductBacklogItemListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['priority', 'description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private currentProjectId: any;
  private project: Project;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private projectService: ProjectService,
              private itemService: BacklogItemService) {
    this.project = JSON.parse(localStorage.getItem('project'));
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
    });
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSource.filterPredicate = (data, filter) => {
      return this.displayedColumns.some(elem => {
        return elem !== 'actions' && data[elem].toLowerCase().indexOf(filter) !== -1;
      });
    };
    this.projectService.getProjectBacklogItems(this.currentProjectId).subscribe(items => {
      this.dataSource.data = items;
    });
  }

  onCreate() {
    this.itemService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      currentProjectId: this.currentProjectId
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ProductBacklogItemFormComponent, dialogConfig).afterClosed().subscribe(() => {
      this.projectService.getProjectBacklogItems(this.currentProjectId).subscribe(items => {
        this.dataSource.data = items;
      });
    });
  }


  onEdit(row) {
    this.itemService.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {
      currentProjectId: this.currentProjectId
    };
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ProductBacklogItemFormComponent, dialogConfig).afterClosed().subscribe(() => {
      this.projectService.getProjectBacklogItems(this.currentProjectId).subscribe(items => {
        this.dataSource.data = items;
      });
    });
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.itemService.deleteProductBacklogItem(id).subscribe(items => {
        this.dataSource.data = items;
      });
    }
  }
}

import {Component, OnInit, ViewChild} from '@angular/core';
import {ProjectService} from '../../../services/project.service';
import {ProjectFormComponent} from '../project-form/project-form.component';
import {MatDialog, MatDialogConfig, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';


@Component({
  selector: 'pms-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name', 'logicName', 'description', 'actions'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private router: Router,
              private dialog: MatDialog,
              private service: ProjectService) {
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
    this.service.getAllProjects().subscribe(projects => {
      this.dataSource.data = projects;
    });
  }

  onCreate() {
    this.service.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ProjectFormComponent, dialogConfig).afterClosed().subscribe(() => {
      this.service.getAllProjects().subscribe(projects => {
        this.dataSource.data = projects;
      });
    });
  }


  onEdit(row) {
    this.service.populateForm(row);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    this.dialog.open(ProjectFormComponent, dialogConfig).afterClosed().subscribe(() => {
      this.service.getAllProjects().subscribe(projects => {
        this.dataSource.data = projects;
      });
    });
  }

  onDelete(id) {
    if (confirm('Are you sure to delete this record ?')) {
      this.service.deleteProject(id).subscribe(projects => {
        this.dataSource.data = projects;
      });
    }
  }

  onView(row) {
    localStorage.setItem('id', row.id);
    localStorage.setItem('project', JSON.stringify(row));
    this.router.navigate(['/dashboard/project/', row.id]);
  }
}

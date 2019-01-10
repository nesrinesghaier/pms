import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../models/project';
import {Resource} from '../models/resource';
import {ProductBacklogItem} from '../models/product-backlog-item';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Budget} from '../models/budget';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiUrl = '/pms-global-web/ws/project/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    logicName: new FormControl('', [Validators.required]),
    description: new FormControl('')
  });

  constructor(private http: HttpClient) {
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      name: '',
      logicName: '',
      description: ''
    });
  }

  populateForm(project) {
    this.form.setValue(project);
  }

  getAllProjects() {
    return this.http.get<Project[]>(this.apiUrl, {headers: this.reqHeader});
  }

  getProjectById(id: number) {
    return this.http.get<Project>(this.apiUrl + id, {headers: this.reqHeader});
  }

  getProjectResources(id: number) {
    return this.http.get<Resource[]>(this.apiUrl + id + '/resources', {headers: this.reqHeader});
  }

  getProjectBudget(id: number) {
    return this.http.get<Budget[]>(this.apiUrl + id + '/budgets', {headers: this.reqHeader});
  }

  getProjectBacklogItems(id: number) {
    return this.http.get<ProductBacklogItem[]>(this.apiUrl + id + '/backlogItems', {headers: this.reqHeader});
  }

  postProject(project: Project) {
    return this.http.post<Project>(this.apiUrl, project, {headers: this.reqHeader});
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.apiUrl, project, {headers: this.reqHeader});
  }

  deleteProject(id: number) {
    return this.http.delete<Project[]>(this.apiUrl + id, {headers: this.reqHeader});
  }

}

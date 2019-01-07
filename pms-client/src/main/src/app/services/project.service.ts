import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../models/project';
import {Resource} from "../models/resource";
import {ProductBacklogItem} from "../models/product-backlog-item";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:8080/pms-global-web/core-resources/project/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getAllProjects() {
    return this.http.get<Project[]>(this.apiUrl, {headers: this.reqHeader});
  }

  getProjectById(id: number) {
    return this.http.get<Project>(this.apiUrl + id, {headers: this.reqHeader});
  }

  getProjectResources(id: number) {
    return this.http.get<Resource>(this.apiUrl + id + '/resources', {headers: this.reqHeader});
  }

  getProjectBacklogItems(id: number) {
    return this.http.get<ProductBacklogItem>(this.apiUrl + id + '/backlogItems', {headers: this.reqHeader});
  }

  postProject(project: Project) {
    return this.http.post<Project>(this.apiUrl, project, {headers: this.reqHeader});
  }

  updateProject(project: Project) {
    return this.http.put<Project>(this.apiUrl, project, {headers: this.reqHeader});
  }

  deleteProject(id: number) {
    return this.http.delete(this.apiUrl + id, {headers: this.reqHeader});
  }

}

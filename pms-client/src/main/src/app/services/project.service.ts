import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Project} from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiUrl = 'http://localhost:8080/pms-global-web/core-resources/project';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getProjects() {
    return this.http.get<Project[]>(this.apiUrl, { headers : this.reqHeader});
  }
  postProject(p: Project) {
    return this.http.post(this.apiUrl, p, { headers : this.reqHeader});
  }
}

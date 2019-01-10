import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Resource} from '../models/resource';
import {TaskConsumption} from '../models/task-consumption';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  apiUrl = '/pms-global-web/ws/resource/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getAllResources() {
    return this.http.get<Resource[]>(this.apiUrl, {headers: this.reqHeader});
  }

  getResourceById(id: number) {
    return this.http.get<Resource>(this.apiUrl + id, {headers: this.reqHeader});
  }

  getResourceConsumptions(id: number) {
    return this.http.get<TaskConsumption[]>(this.apiUrl + id + '/consumptions', {headers: this.reqHeader});
  }

  addResource(userId: number, projectId: number, resource: Resource) {
    return this.http.post<Resource>(this.apiUrl + userId + '/' + projectId, resource, {headers: this.reqHeader});
  }

  updateResource(resource: Resource) {
    return this.http.put<Resource>(this.apiUrl, resource, {headers: this.reqHeader});
  }

  deleteResource(id: number) {
    return this.http.delete(this.apiUrl + id, {headers: this.reqHeader});
  }

}

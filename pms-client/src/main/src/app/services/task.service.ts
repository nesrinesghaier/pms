import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from 'rxjs';
import {TaskDependency} from '../models/task-dependency';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  apiUrl = '/pms-global-web/ws/task';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getAllTask() {
    return this.http.get<Task[]>(this.apiUrl, {headers: this.header});
  }

  getTaskById(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Task>(url, {headers: this.header});
  }

  getTaskConsumptions(id: number): Observable<Task[]> {
    const url = `${this.apiUrl}/${id}/consumptions`;
    return this.http.get<Task[]>(url, {headers: this.header});
  }

  getTaskDependencies(id: number): Observable<TaskDependency[]> {
    const url = `${this.apiUrl}/${id}/dependencies`;
    return this.http.get<TaskDependency[]>(url, {headers: this.header});
  }


  addTask(t: Task, storyId: number ) {
    const url = `${this.apiUrl}/${storyId}`;
    return this.http.post(this.apiUrl, t, {headers: this.header});
  }

  addDependency(t: Task ) {
    const url = `${this.apiUrl}/addDependency`;
    return this.http.post(this.apiUrl, t, {headers: this.header});
  }
  updateTask(t: Task): Observable<Task> {
    return this.http.put<Task>(this.apiUrl, t, {headers: this.header});
  }

  deleteTask(t: Task | number): Observable<Task> {
    const id = typeof t === 'number' ? t : t.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task>(url, {headers: this.header});
  }
}

import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../models/task';
import {Observable} from 'rxjs';
import {TaskConsumption} from '../models/task-consumption';

@Injectable({
  providedIn: 'root'
})
export class TaskConsumptionService {

  apiUrl = 'http://localhost:8080/pms-global-web/core-resources/taskconsumption';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getAllTaskConsumption() {
    return this.http.get<TaskConsumption[]>(this.apiUrl, {headers: this.header});
  }

  getTaskConsumptionById(id: number): Observable<TaskConsumption> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<TaskConsumption>(url, {headers: this.header});
  }

  getTaskConsumptions(id: number): Observable<Task> {
    const url = `${this.apiUrl}/${id}/consumptions`;
    return this.http.get<Task>(url, {headers: this.header});
  }
  addTaskConsumption(t: TaskConsumption , taskId: number, resourceId: number ) {
    const url = `${this.apiUrl}/${taskId}/${resourceId}`;
    return this.http.post(this.apiUrl, t, {headers: this.header});
  }

  updateConsumption(t: TaskConsumption): Observable<any> {
    return this.http.put(this.apiUrl, t, {headers: this.header});
  }

  deleteTaskConsumption(t: TaskConsumption | number): Observable<Task> {
    const id = typeof t === 'number' ? t : t.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<Task>(url, {headers: this.header});
  }}

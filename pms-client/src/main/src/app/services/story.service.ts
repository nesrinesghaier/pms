import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Story} from '../models/story';
import {Task} from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  apiUrl = '/pms-global-web/ws/story/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }
  getAllStories() {
    return this.http.get<Story[]>(this.apiUrl, {headers: this.reqHeader});
  }

  getStoryById(id: number) {
    return this.http.get<Story>(this.apiUrl + id, {headers: this.reqHeader});
  }

  getStoryTasks(id: number) {
    return this.http.get<Task[]>(this.apiUrl + id + '/tasks', {headers: this.reqHeader});
  }

  addStory(backlogItemId: number, story: Story) {
    return this.http.post<Story>(this.apiUrl + backlogItemId, story, {headers: this.reqHeader});
  }

  updateStory(story: Story) {
    return this.http.put<Story>(this.apiUrl, story, {headers: this.reqHeader});
  }

  deleteStory(id: number) {
    return this.http.delete(this.apiUrl + id, {headers: this.reqHeader});
  }

}

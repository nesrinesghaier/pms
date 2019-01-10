import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = '/pms-global-web/ws/user';
  header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }

  getAllUser() {
    return this.http.get<User[]>(this.apiUrl, {headers: this.header});
  }

  getUserById(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<User>(url, {headers: this.header});
  }

  getUserResources(id: number): Observable<User> {
    const url = `${this.apiUrl}/${id}/resources`;
    return this.http.get<User>(url, {headers: this.header});
  }

  addUser(u: User) {
    return this.http.post(this.apiUrl, u, {headers: this.header});
  }

  updateUser(u: User): Observable<any> {
    return this.http.put(this.apiUrl, u, {headers: this.header});
  }

  deleteUser(u: User | number): Observable<User> {
    const id = typeof u === 'number' ? u : u.id;
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<User>(url, {headers: this.header});
   }
}

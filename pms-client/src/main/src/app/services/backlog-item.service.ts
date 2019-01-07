import {Injectable} from '@angular/core';
import {ProductBacklogItem} from '../models/product-backlog-item';
import {Resource} from '../models/resource';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Story} from '../models/story';
import {ProductBacklogItemDependency} from '../models/product-backlog-item-dependency';

@Injectable({
  providedIn: 'root'
})
export class BacklogItemService {
  apiUrl = 'http://localhost:8080/pms-global-web/core-resources/backlogitem/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  constructor(private http: HttpClient) {
  }


  getAllProductBacklogItems() {
    return this.http.get<ProductBacklogItem[]>(this.apiUrl, {headers: this.reqHeader});
  }

  getProductBacklogItemById(id: number) {
    return this.http.get<ProductBacklogItem>(this.apiUrl + id, {headers: this.reqHeader});
  }

  getProductBacklogItemStories(id: number) {
    return this.http.get<Story[]>(this.apiUrl + id + '/stories', {headers: this.reqHeader});
  }

  getProductBacklogItemDependencies(id: number) {
    return this.http.get<ProductBacklogItemDependency[]>(this.apiUrl + id + '/dependencies', {headers: this.reqHeader});
  }

  addProductBacklogItem(projectId: number, backlogItem: ProductBacklogItem) {
    return this.http.post<ProductBacklogItem>(this.apiUrl + projectId, backlogItem, {headers: this.reqHeader});
  }

  addProductBacklogItemDeppendency(data: Map<string, object>) {
    return this.http.post<ProductBacklogItem>(this.apiUrl + 'addDependency', data, {headers: this.reqHeader});
  }

  updateProductBacklogItem(backlogItem: ProductBacklogItem) {
    return this.http.put<ProductBacklogItem>(this.apiUrl, backlogItem, {headers: this.reqHeader});
  }

  deleteProductBacklogItem(id: number) {
    return this.http.delete(this.apiUrl + id, {headers: this.reqHeader});
  }

}

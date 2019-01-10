import {Injectable} from '@angular/core';
import {ProductBacklogItem} from '../models/product-backlog-item';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Story} from '../models/story';
import {ProductBacklogItemDependency} from '../models/product-backlog-item-dependency';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BacklogItemService {
  apiUrl = '/pms-global-web/ws/backlogitem/';
  reqHeader = new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json, text/plain, */*'
  });

  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    priority: new FormControl(1, [Validators.required, Validators.pattern('[0-9]*')]),
    description: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient) {
  }

  initializeFormGroup() {
    this.form.setValue({
      id: null,
      priority: 1,
      description: ''
    });
  }

  populateForm(project) {
    this.form.setValue(project);
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
    return this.http.delete<ProductBacklogItem[]>(this.apiUrl + id, {headers: this.reqHeader});
  }

}

import {ProductBacklogItem} from './product-backlog-item';
import {Resource} from './resource';
import {Budget} from './budget';
import {from} from 'rxjs';

export class Project {
  id: number;
  name: string;
  logicName: string;
  creationDate: string;
  description: string;
  productBacklogItems: Array<ProductBacklogItem>;
  resources: Array<Resource>;
  budgets: Array<Budget>;

  constructor() {
    this.productBacklogItems = new Array<ProductBacklogItem>();
    this.resources = new Array<Resource>();
    this.budgets = new Array<Budget>();
  }
}

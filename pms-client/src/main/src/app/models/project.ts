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
  productBacklogItems: ProductBacklogItem[];
  resources: Resource[];
  budgets: Budget[];

}

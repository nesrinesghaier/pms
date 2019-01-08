import {ProductBacklogItem} from './product-backlog-item';
import {Resource} from './resource';
import {Budget} from './budget';
import {from} from 'rxjs';
export class Project {
  private id: number;
  private name: string;
  private logicName: string;
  private creationDate: string;
  private description: string;
  private productBacklogItems: Array<ProductBacklogItem>;
  private resources: Array<Resource>;
  private budgets: Array<Budget>;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getLogicName(): string {
    return this.logicName;
  }

  setLogicName(value: string) {
    this.logicName = value;
  }

  getCreationDate(): string {
    return this.creationDate;
  }

  setCreationDate(value: string) {
    this.creationDate = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getProductBacklogItems(): Array<ProductBacklogItem> {
    return this.productBacklogItems;
  }

  setProductBacklogItems(value: Array<ProductBacklogItem>) {
    this.productBacklogItems = value;
  }

  getResources(): Array<Resource> {
    return this.resources;
  }

  setResources(value: Array<Resource>) {
    this.resources = value;
  }

  getbudgets(): Array<Budget> {
    return this.budgets;
  }

  setbudgets(value: Array<Budget>) {
    this.budgets = value;
  }

  constructor(name: string, logicName: string, creationDate: string, description: string, productBacklogItems: Array<ProductBacklogItem>, resources: Array<Resource>, budgets: Array<Budget>) {
    this.name = name;
    this.logicName = logicName;
    this.creationDate = creationDate;
    this.description = description;
    this.productBacklogItems = productBacklogItems;
    this.resources = resources;
    this.budgets = budgets;
  }
}

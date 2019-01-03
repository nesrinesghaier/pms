import {ProductBacklogItem} from "./product-backlog-item";
import {DependencyType} from "./dependency-type.enum";

export class ProductBacklogItemDependency {
  private pbid_id: number;
  private sourceBacklogItem: ProductBacklogItem;
  private destinationBacklogItem: ProductBacklogItem;
  private type: DependencyType;

  constructor(sourceBacklogItem: ProductBacklogItem, destinationBacklogItem: ProductBacklogItem, type: DependencyType) {
    this.sourceBacklogItem = sourceBacklogItem;
    this.destinationBacklogItem = destinationBacklogItem;
    this.type = type;
  }

  getPbid_id(): number {
    return this.pbid_id;
  }

  setPbid_id(value: number) {
    this.pbid_id = value;
  }

  getSourceBacklogItem(): ProductBacklogItem {
    return this.sourceBacklogItem;
  }

  setSourceBacklogItem(value: ProductBacklogItem) {
    this.sourceBacklogItem = value;
  }

  getDestinationBacklogItem(): ProductBacklogItem {
    return this.destinationBacklogItem;
  }

  setDestinationBacklogItem(value: ProductBacklogItem) {
    this.destinationBacklogItem = value;
  }

  getType(): DependencyType {
    return this.type;
  }

  setType(value: DependencyType) {
    this.type = value;
  }
}

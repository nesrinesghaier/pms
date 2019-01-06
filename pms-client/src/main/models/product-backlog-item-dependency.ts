import {ProductBacklogItem} from './product-backlog-item';
import {DependencyType} from './dependency-type.enum';

export class ProductBacklogItemDependency {
  private id: number;
  private destinationBacklogItem: ProductBacklogItem;
  private type: DependencyType;

  constructor(destinationBacklogItem: ProductBacklogItem, type: DependencyType) {
    this.destinationBacklogItem = destinationBacklogItem;
    this.type = type;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
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

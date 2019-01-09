import {ProductBacklogItem} from './product-backlog-item';
import {DependencyType} from './dependency-type.enum';

export class ProductBacklogItemDependency {
   id: number;
   destinationBacklogItem: ProductBacklogItem;
   type: DependencyType;

}

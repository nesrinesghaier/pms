import {ProductBacklogItemDependency} from './product-backlog-item-dependency';
import {Story} from './story';

export class ProductBacklogItem {
  id: number;
  priority: number;
  description: string;
  progress: number;
  startDate: string;
  endDate: string;
  stories: Story[];
  backlogItemDependencies: ProductBacklogItemDependency[];

}

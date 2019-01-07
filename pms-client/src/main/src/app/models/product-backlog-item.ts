import {Project} from './project';
import {ProductBacklogItemDependency} from './product-backlog-item-dependency';
import {Story} from './story';

export class ProductBacklogItem {
  private id: number;
  private priority: number;
  private description: string;
  private backlogItemDependencies: Array<ProductBacklogItemDependency>;
  private stories: Array<Story>;


  constructor(priority: number, description: string, backlogItemDependencies: Array<ProductBacklogItemDependency>, stories: Array<Story>) {
    this.priority = priority;
    this.description = description;
    this.backlogItemDependencies = backlogItemDependencies;
    this.stories = stories;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getPriority(): number {
    return this.priority;
  }

  setPriority(value: number) {
    this.priority = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getBacklogItemDependencies(): Array<ProductBacklogItemDependency> {
    return this.backlogItemDependencies;
  }

  setBacklogItemDependencies(value: Array<ProductBacklogItemDependency>) {
    this.backlogItemDependencies = value;
  }

  getStories(): Array<Story> {
    return this.stories;
  }

  setStories(value: Array<Story>) {
    this.stories = value;
  }

}

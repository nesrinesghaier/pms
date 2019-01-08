import {ProductBacklogItemDependency} from './product-backlog-item-dependency';
import {Story} from './story';

export class ProductBacklogItem {
  private id: number;
  private priority: number;
  private description: string;
  private progress: number;
  private stories: Array<Story>;
  private expanded: boolean;
  private backlogItemDependencies: ProductBacklogItemDependency[];

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
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

  getExpanded(): boolean {
    return this.expanded;
  }

  setExpanded(value: boolean) {
    this.expanded = value;
  }

  getProgress(): number {
    return this.progress;
  }

  setProgress(value: number) {
    this.progress = value;
  }

  getPriority(): number {
    return this.priority;
  }

  setPriority(value: number) {
    this.priority = value;
  }

  /*constructor(priority: number, description: string, progress: number, stories: Array<Story>, expanded: boolean,
              backlogItemDependencies: ProductBacklogItemDependency[]) {
    this.priority = priority;
    this.description = description;
    this.progress = progress;
    this.stories = stories;
    this.expanded = expanded;
    this.backlogItemDependencies = backlogItemDependencies;
  }*/
}

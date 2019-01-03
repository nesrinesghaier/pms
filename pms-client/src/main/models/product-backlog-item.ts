import {Project} from "./project";
import {ProductBacklogItemDependency} from "./product-backlog-item-dependency";
import {Story} from "./story";

export class ProductBacklogItem {
  private pbi_id:number;
  private project:Project;
  private priority:number;
  private description:string;
  private backlogItemDependencys:Array<ProductBacklogItemDependency>;
  private stories:Array<Story>;


  constructor(project: Project, priority: number, description: string, backlogItemDependencys: Array<ProductBacklogItemDependency>, stories: Array<Story>) {
    this.project = project;
    this.priority = priority;
    this.description = description;
    this.backlogItemDependencys = backlogItemDependencys;
    this.stories = stories;
  }

  getPbi_id(): number {
    return this.pbi_id;
  }

  setPbi_id(value: number) {
    this.pbi_id = value;
  }

  getProject(): Project {
    return this.project;
  }

  setProject(value: Project) {
    this.project = value;
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

  getBacklogItemDependencys(): Array<ProductBacklogItemDependency> {
    return this.backlogItemDependencys;
  }

  setBacklogItemDependencys(value: Array<ProductBacklogItemDependency>) {
    this.backlogItemDependencys = value;
  }

  getStories(): Array<Story> {
    return this.stories;
  }

  setStories(value: Array<Story>) {
    this.stories = value;
  }

}

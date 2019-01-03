import {ProductBacklogItem} from "./product-backlog-item";

export class Story {
  private story_id: number;
  private actorUser: string;
  private action: string;
  private purpose: string;
  private complexity: number;
  private backlogItem: ProductBacklogItem;

  getStory_id(): number {
    return this.story_id;
  }

  setStory_id(value: number) {
    this.story_id = value;
  }

  getActorUser(): string {
    return this.actorUser;
  }

  setActorUser(value: string) {
    this.actorUser = value;
  }

  getAction(): string {
    return this.action;
  }

  setAction(value: string) {
    this.action = value;
  }

  getPurpose(): string {
    return this.purpose;
  }

  setPurpose(value: string) {
    this.purpose = value;
  }

  getComplexity(): number {
    return this.complexity;
  }

  setComplexity(value: number) {
    this.complexity = value;
  }

  getBacklogItem(): ProductBacklogItem {
    return this.backlogItem;
  }

  setBacklogItem(value: ProductBacklogItem) {
    this.backlogItem = value;
  }

  constructor(story_id: number, actorUser: string, action: string, purpose: string, complexity: number, backlogItem: ProductBacklogItem) {
    this.story_id = story_id;
    this.actorUser = actorUser;
    this.action = action;
    this.purpose = purpose;
    this.complexity = complexity;
    this.backlogItem = backlogItem;
  }
}

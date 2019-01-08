import {Task} from './task';

export class Story {
  private id: number;
  private actorUser: string;
  private action: string;
  private purpose: string;
  private complexity: number;
  private tasks: Array<Task>;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
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

  get taskDependencies(): Array<Task> {
    return this.tasks;
  }

  set taskDependencies(value: Array<Task>) {
    this.tasks = value;
  }

  constructor(id: number, actorUser: string, action: string, purpose: string, complexity: number, taskDependencies: Array<Task>) {
    this.id = id;
    this.actorUser = actorUser;
    this.action = action;
    this.purpose = purpose;
    this.complexity = complexity;
    this.tasks = taskDependencies;
  }
}

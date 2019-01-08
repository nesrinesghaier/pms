import {Task} from './task';

export class Story {
  private id: number;
  private actorUser: string;
  private action: string;
  private purpose: string;
  private complexity: number;
  private startDate: string;
  private endDate: string;
  private progress: number;
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

  getProgress(): number {
    return this.progress;
  }

  setProgress(value: number) {
    this.progress = value;
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

  getTasks(): Array<Task> {
    return this.tasks;
  }

  setTasks(value: Array<Task>) {
    this.tasks = value;
  }

  getEndDate(): string {
    return this.endDate;
  }

  setEndDate(value: string) {
    this.endDate = value;
  }


  getStartDate(): string {
    return this.startDate;
  }

  setStartDate(value: string) {
    this.startDate = value;
  }

  /*constructor(actorUser: string, action: string, purpose: string, complexity: number, startDate: string, endDate: string, tasks: Array<Task>) {
    this.actorUser = actorUser;
    this.action = action;
    this.purpose = purpose;
    this.complexity = complexity;
    this.startDate = startDate;
    this.endDate = endDate;
    this.tasks = tasks;
  }*/

}

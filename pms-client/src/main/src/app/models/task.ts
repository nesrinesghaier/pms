import {TaskConsumption} from './task-consumption';
import {TaskDependency} from './task-dependency';
import {State} from './State';

export class Task {
  private id: number;
  private description: string;
  private startDate: string;
  private endDate: string;
  private realStartDate: string;
  private realEndDate: string;
  private state: State;
  private complexity: number;
  private progress: number;
  private taskConsumptions: Array<TaskConsumption>;
  private taskDependencies: Array<TaskDependency>;
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

  getStartDate(): string {
    return this.startDate;
  }

  setStartDate(value: string) {
    this.startDate = value;
  }

  getEndDate(): string {
    return this.endDate;
  }

  setEndDate(value: string) {
    this.endDate = value;
  }

  getComplexity(): number {
    return this.complexity;
  }

  setComplexity(value: number) {
    this.complexity = value;
  }

  getTaskConsumptions(): Array<TaskConsumption> {
    return this.taskConsumptions;
  }

  setTaskConsumptions(value: Array<TaskConsumption>) {
    this.taskConsumptions = value;
  }

  getTaskDependencies(): Array<TaskDependency> {
    return this.taskDependencies;
  }

  setTaskDependencies(value: Array<TaskDependency>) {
    this.taskDependencies = value;
  }


  getRealStartDate(): string {
    return this.realStartDate;
  }

  setRealStartDate(value: string) {
    this.realStartDate = value;
  }

  getRealEndDate(): string {
    return this.realEndDate;
  }

  setRealEndDate(value: string) {
    this.realEndDate = value;
  }

  getState(): State {
    return this.state;
  }

  setState(value: State) {
    this.state = value;
  }
  getProgress(): number {
    return this.progress;
  }

  setProgress(value: number) {
    this.progress = value;
  }

}

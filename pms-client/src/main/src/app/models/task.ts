import {TaskConsumption} from './task-consumption';
import {TaskDependency} from './task-dependency';
import {State} from './State';

export class Task {
  private id: number;
  private description: string;
  private estimationDuration: number;
  private startDate: string;
  private endDate: string;
  private realStartDate: string;
  private realEndDate: string;
  private state: State;
  private complexity: number;
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

  getEstimationDuration(): number {
    return this.estimationDuration;
  }

  setEstimationDuration(value: number) {
    this.estimationDuration = value;
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

  constructor(description: string, estimationDuration: number, startDate: string, endDate: string, realStartDate: string, realEndDate: string, state: State, complexity: number, taskConsumptions: Array<TaskConsumption>, taskDependencies: Array<TaskDependency>) {
    this.description = description;
    this.estimationDuration = estimationDuration;
    this.startDate = startDate;
    this.endDate = endDate;
    this.realStartDate = realStartDate;
    this.realEndDate = realEndDate;
    this.state = state;
    this.complexity = complexity;
    this.taskConsumptions = taskConsumptions;
    this.taskDependencies = taskDependencies;
  }
}

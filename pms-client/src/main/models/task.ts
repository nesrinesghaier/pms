import {TaskConsumption} from './task-consumption';
import {TaskDependency} from './task-dependency';

export class Task {
  private id: number;
  private description: string;
  private estimationDuration: number;
  private startDate: string;
  private endDate: string;
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

  constructor(id: number, description: string, estimationDuration: number, startDate: string, endDate: string, complexity: number, taskConsumptions: Array<TaskConsumption>, taskDependencies: Array<TaskDependency>) {
    this.id = id;
    this.description = description;
    this.estimationDuration = estimationDuration;
    this.startDate = startDate;
    this.endDate = endDate;
    this.complexity = complexity;
    this.taskConsumptions = taskConsumptions;
    this.taskDependencies = taskDependencies;
  }
}

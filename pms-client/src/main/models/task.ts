import {TaskConsumption} from "./task-consumption";
import {TaskDependency} from "./task-dependency";

export class Task {
  private task_id: number;
  private description: string;
  private estimationDuration: number;
  private startDate: Date;
  private endDate: Date;
  private complexity: number;
  private taskConsumptions: Array<TaskConsumption>;
  private taskDependencies: Array<TaskDependency>;

  getTask_id(): number {
    return this.task_id;
  }

  setTask_id(value: number) {
    this.task_id = value;
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

  getStartDate(): Date {
    return this.startDate;
  }

  setStartDate(value: Date) {
    this.startDate = value;
  }

  getEndDate(): Date {
    return this.endDate;
  }

  setEndDate(value: Date) {
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

  constructor(task_id: number, description: string, estimationDuration: number, startDate: Date, endDate: Date, complexity: number, taskConsumptions: Array<TaskConsumption>, taskDependencies: Array<TaskDependency>) {
    this.task_id = task_id;
    this.description = description;
    this.estimationDuration = estimationDuration;
    this.startDate = startDate;
    this.endDate = endDate;
    this.complexity = complexity;
    this.taskConsumptions = taskConsumptions;
    this.taskDependencies = taskDependencies;
  }
}

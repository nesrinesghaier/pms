import {DependencyType} from "./dependency-type.enum";
import {Task} from './task';

export class TaskDependency {
  private taskDependency_id: number;
  private sourceTask: Task;
  private destinationTask: Task;
  private type: DependencyType;

  constructor(taskDependency_id: number, sourceTask: Task, destinationTask: Task, type: DependencyType) {
    this.taskDependency_id = taskDependency_id;
    this.sourceTask = sourceTask;
    this.destinationTask = destinationTask;
    this.type = type;
  }

  getTaskDependency_id(): number {
    return this.taskDependency_id;
  }

  setTaskDependency_id(value: number) {
    this.taskDependency_id = value;
  }

  getSourceTask(): Task {
    return this.sourceTask;
  }

  setSourceTask(value: Task) {
    this.sourceTask = value;
  }

  getDestinationTask(): Task {
    return this.destinationTask;
  }

  setDestinationTask(value: Task) {
    this.destinationTask = value;
  }

  getType(): DependencyType {
    return this.type;
  }

  setType(value: DependencyType) {
    this.type = value;
  }
}

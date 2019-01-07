import {DependencyType} from './dependency-type.enum';
import {Task} from './task';

export class TaskDependency {
  private id: number;
  private destinationTask: Task;
  private type: DependencyType;

  constructor(id: number, destinationTask: Task, type: DependencyType) {
    this.id = id;
    this.destinationTask = destinationTask;
    this.type = type;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
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

import {Task} from "./task";
import {Resource} from "./resource";

export class TaskConsumption {
  private taskConsumption_id: number;
  private amount: string;
  private date: Date;
  private task: Task;
  private resources: Array<Resource>;

  constructor(taskConsumption_id: number, amount: string, date: Date, task: Task, resources: Array<Resource>) {
    this.taskConsumption_id = taskConsumption_id;
    this.amount = amount;
    this.date = date;
    this.task = task;
    this.resources = resources;
  }

  getTaskConsumption_id(): number {
    return this.taskConsumption_id;
  }

  setTaskConsumption_id(value: number) {
    this.taskConsumption_id = value;
  }

  getAmount(): string {
    return this.amount;
  }

  setAmount(value: string) {
    this.amount = value;
  }

  getDate(): Date {
    return this.date;
  }

  setDate(value: Date) {
    this.date = value;
  }

  getTask(): Task {
    return this.task;
  }

  setTask(value: Task) {
    this.task = value;
  }

  getResources(): Array<Resource> {
    return this.resources;
  }

  setResources(value: Array<Resource>) {
    this.resources = value;
  }
}

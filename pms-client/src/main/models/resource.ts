import {User} from './user';
import {Project} from './project';
import {TaskConsumption} from './task-consumption';
import {ResourceRole} from './resource-role.enum';

export class Resource {

  private id: number;
  private resourceRole: ResourceRole;
  private description: string;
  private taskConsumptions: Array<TaskConsumption>;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getResourceRole(): ResourceRole {
    return this.resourceRole;
  }

  setResourceRole(value: ResourceRole) {
    this.resourceRole = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getTaskConsumptions(): Array<TaskConsumption> {
    return this.taskConsumptions;
  }

  setTaskConsumptions(value: Array<TaskConsumption>) {
    this.taskConsumptions = value;
  }

  constructor(id: number, resourceRole: ResourceRole, description: string, taskConsumptions: Array<TaskConsumption>) {
    this.id = id;
    this.resourceRole = resourceRole;
    this.description = description;
    this.taskConsumptions = taskConsumptions;
  }
}

import {User} from "./user";
import {Project} from "./project";
import {TaskConsumption} from "./task-consumption";
import {ResourceRole} from "./resource-role.enum";

export class Resource {

  private resource_id: number;
  private role: ResourceRole;
  private description: string;
  private user: User;
  private project: Project;
  private taskConsumptions: Array<TaskConsumption>;

  getResource_id(): number {
    return this.resource_id;
  }

  setResource_id(value: number) {
    this.resource_id = value;
  }

  getRole(): ResourceRole {
    return this.role;
  }

  setRole(value: ResourceRole) {
    this.role = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }

  getUser(): User {
    return this.user;
  }

  setUser(value: User) {
    this.user = value;
  }

  getProject(): Project {
    return this.project;
  }

  setProject(value: Project) {
    this.project = value;
  }

  getTaskConsumptions(): Array<TaskConsumption> {
    return this.taskConsumptions;
  }

  setTaskConsumptions(value: Array<TaskConsumption>) {
    this.taskConsumptions = value;
  }

  constructor(resource_id: number, role: ResourceRole, description: string, user: User, project: Project, taskConsumptions: Array<TaskConsumption>) {
    this.resource_id = resource_id;
    this.role = role;
    this.description = description;
    this.user = user;
    this.project = project;
    this.taskConsumptions = taskConsumptions;
  }
}

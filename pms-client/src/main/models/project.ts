export class Project {
  project_id: number;
  private name: string;
  private logicName:string;
  private creationDate:Date;
  private description:string;


  constructor(name: string, logicName: string, creationDate: Date, description: string) {
    this.name = name;
    this.logicName = logicName;
    this.creationDate = creationDate;
    this.description = description;
  }

  getName(): string {
    return this.name;
  }

  setName(value: string) {
    this.name = value;
  }

  getLogicName(): string {
    return this.logicName;
  }

  setLogicName(value: string) {
    this.logicName = value;
  }

  getCreationDate(): Date {
    return this.creationDate;
  }

  setCreationDate(value: Date) {
    this.creationDate = value;
  }

  getDescription(): string {
    return this.description;
  }

  setDescription(value: string) {
    this.description = value;
  }
}

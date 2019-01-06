export class TaskConsumption {
  private id: number;
  private amount: string;
  private taskDate: Date;

  constructor(id: number, amount: string, taskDate: Date) {
    this.id = id;
    this.amount = amount;
    this.taskDate = taskDate;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getAmount(): string {
    return this.amount;
  }

  setAmount(value: string) {
    this.amount = value;
  }

  gettaskDate(): Date {
    return this.taskDate;
  }

  settaskDate(value: Date) {
    this.taskDate = value;
  }

}

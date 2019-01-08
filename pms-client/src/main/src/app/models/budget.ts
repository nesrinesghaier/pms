export class Budget {
  private id: number;
  private date: string;
  private amount: number;

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
  }

  getDate(): string {
    return this.date;
  }

  setDate(value: string) {
    this.date = value;
  }

  constructor(id: number, date: string, amount: number) {
    this.id = id;
    this.date = date;
    this.amount = amount;
  }
}

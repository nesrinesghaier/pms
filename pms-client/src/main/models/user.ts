import {Resource} from "./resource";

export class User {
  private user_id: number;
  private firstName: string;
  private lastName: string;
  private cin: string;
  private adress: string;
  private resources: Array<Resource>;


  constructor(user_id: number, firstName: string, lastName: string, cin: string, adress: string, resources: Array<Resource>) {
    this.user_id = user_id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.cin = cin;
    this.adress = adress;
    this.resources = resources;
  }

  getUser_id(): number {
    return this.user_id;
  }

  setUser_id(value: number) {
    this.user_id = value;
  }

  getFirstName(): string {
    return this.firstName;
  }

  setFirstName(value: string) {
    this.firstName = value;
  }

  getLastName(): string {
    return this.lastName;
  }

  setLastName(value: string) {
    this.lastName = value;
  }

  getCin(): string {
    return this.cin;
  }

  setCin(value: string) {
    this.cin = value;
  }

  getAdress(): string {
    return this.adress;
  }

  setAdress(value: string) {
    this.adress = value;
  }

  getResources(): Array<Resource> {
    return this.resources;
  }

  setResources(value: Array<Resource>) {
    this.resources = value;
  }
}

import {Resource} from './resource';

export class User {
  private id: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private adress: string;
  private resources: Array<Resource>;

  constructor(id: number, firstName: string, lastName: string, email: string, adress: string, resources: Array<Resource>) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.adress = adress;
    this.resources = resources;
  }

  getId(): number {
    return this.id;
  }

  setId(value: number) {
    this.id = value;
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

  getEmail(): string {
    return this.email;
  }

  setEmail(value: string) {
    this.email = value;
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

import {Resource} from './resource';

export class User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  adress: string;
  resources: Resource[];
}

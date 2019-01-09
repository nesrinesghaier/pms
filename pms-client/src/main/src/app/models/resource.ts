import {TaskConsumption} from './task-consumption';
import {ResourceRole} from './resource-role.enum';

export class Resource {

   id: number;
   resourceRole: ResourceRole;
   description: string;
   taskConsumptions: TaskConsumption[];

}

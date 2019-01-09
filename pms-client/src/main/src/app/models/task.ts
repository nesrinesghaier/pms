import {TaskConsumption} from './task-consumption';
import {TaskDependency} from './task-dependency';
import {State} from './State';

export class Task {
  id: number;
  description: string;
  startDate: string;
  endDate: string;
  realStartDate: string;
  realEndDate: string;
  state: State;
  complexity: number;
  progress: number;
  taskConsumptions: TaskConsumption[];
  taskDependencies: TaskDependency[];

}

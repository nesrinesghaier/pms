import {DependencyType} from './dependency-type.enum';
import {Task} from './task';

export class TaskDependency {
   id: number;
   destinationTask: Task;
   type: DependencyType;
}

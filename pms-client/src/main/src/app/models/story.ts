import {Task} from './task';

export class Story {
  id: number;
  actorUser: string;
  storyAction: string;
  purpose: string;
  complexity: number;
  startDate: string;
  endDate: string;
  progress: number;
  tasks: Task[];
}

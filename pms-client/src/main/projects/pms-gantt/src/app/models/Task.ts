export class Task {
  name: string;
  description: string;
  progress: number;
  progressDates: string[];
  dates: {
    start: string;
    end: string;
  };
  tasks: Task[];
  expanded: boolean; // status of expanded
}

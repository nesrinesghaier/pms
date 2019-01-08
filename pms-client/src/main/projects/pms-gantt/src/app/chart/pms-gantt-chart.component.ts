import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';
import { BehaviorSubject, Observable, of } from 'rxjs';
import * as Moment from 'moment';
import { extendMoment } from 'moment-range';
const moment = extendMoment(Moment);

import { Task } from '../models/Task';
import { TaskFlatNode } from '../models/TaskFlatNode';

@Injectable()
export class ChartDatabase {
  id; // chart id
  moment = moment;
  dataChange = new BehaviorSubject<Task>(null);
  storageKey = 'charts';

  get data(): Task { return this.dataChange.value; }

  constructor(private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.id = params['id'];
      console.log(localStorage.getItem(this.storageKey));
      this.initialize();
    });
    this.dataChange.asObservable().subscribe(val => {
      this.saveStorage(val);
    });
  }

  // load local data
  loadStorage() {
    const charts = localStorage.getItem(this.storageKey);
    return JSON.parse(charts);
  }

  // save local data
  saveStorage(val) {
    const charts = JSON.parse(localStorage.getItem(this.storageKey)) as Array<Task>;
    charts[this.id] = val;
    localStorage.setItem(this.storageKey, JSON.stringify(charts));
  }

  initialize() {
    const charts = this.loadStorage(); // load storage of charts
    if (charts && charts.length && charts[this.id]) {
      const tree = this.buildTree([charts[this.id]], 0); // build tree
      this.dataChange.next(tree[0]); // broadcast data
    } else {
      // init a new project
      const start = moment().format('YYYY-MM-DD');
      const end = moment().add(7, 'days').format('YYYY-MM-DD');
      const root = {
        'name': 'Project Name',
        'progress': 0,
        'dates': {
          'start': start,
          'end': end,
        },
        'tasks': []
      };
      const tree = this.buildTree([root], 0); // build tree
      this.dataChange.next(tree[0]); // broadcast data
    }
  }

  buildTree(tasks: Array<any>, level: number): Task[] {
    return tasks.map((step: Task) => {
      const newTask = new Task();
      newTask.name = step.name;
      newTask.progress = step.progress;
      newTask.dates = step.dates;
      // build progress dates
      newTask.progressDates = this.setProgressDates(step);

      newTask.expanded = step.expanded !== undefined ? step.expanded : true;

      if (step.tasks.length) {
        newTask.tasks = this.buildTree(step.tasks, level + 1);
      } else {
        newTask.tasks = [];
      }
      return newTask;
    });
  }

  // update progress dates
  setProgressDates(step: Task) {
    const start = this.moment(step.dates.start);
    const end = this.moment(step.dates.end);
    const range = moment.range(start, end);

    const numDays = Math.round(Array.from(range.by('days')).length * step.progress / 100); // estimated completed days
    const totalDays = Array.from(range.by('days')).map(d => d.format('YYYY-MM-DD')); // all days in string array
    return totalDays.splice(0, numDays); // start from 0, get the first len days
  }

  /** step manipulations */
  // update step name
  updateTaskName(node: Task, name: string) {
    node.name = name;
    // do not update tree, otherwise will interupt the typing
    this.saveStorage(this.data);
    console.log('data updated');
  }

  // add child step
  addChildTask(parent: Task) {
    parent.expanded = true; // set parent node expanded to show children
    const child = new Task();
    child.name = '';
    child.progress = 0;
    child.progressDates = [];
    child.dates = {
      start: parent.dates.start,
      end: parent.dates.end
    };
    child.tasks = [];
    parent.tasks.push(child);
    this.dataChange.next(this.data);
    console.log('data updated');
  }

  // delete step
  deleteTask(parent: Task, child: Task) {
    const childIndex = parent.tasks.indexOf(child);
    parent.tasks.splice(childIndex, 1);
    this.dataChange.next(this.data);
    console.log('data updated');
  }

  // toggle expanded
  toggleExpaned(step: Task) {
    step.expanded = !step.expanded;
    this.saveStorage(this.data);
    console.log('data updated');
  }

  // update progress
  updateProgress(step: Task, progress: number) {
    step.progress = progress;
    step.progressDates = this.setProgressDates(step);
    this.saveStorage(this.data);
    console.log('data updated');
    // instead of refreshing whole tree, return progress dates and update the step only
    return step.progressDates;
  }

  // update date range
  updateDateRange(step: Task) {
    step.progressDates = this.setProgressDates(step);
    this.saveStorage(this.data);
    console.log('data updated');
    // instead of refreshing whole tree, return progress dates and update the step only
    return step.progressDates;
  }

}

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'pms-gantt-app-chart',
  templateUrl: './pms-gantt-chart.component.html',
  styleUrls: ['./pms-gantt-chart.component.scss'],
  providers: [ChartDatabase]
})
export class PmsGanttChartComponent implements OnInit {

  public id;
  constructor(private database: ChartDatabase, private route: ActivatedRoute) {
    route.parent.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<TaskFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    database.dataChange.subscribe((tree: Task) => {
      if (tree) {
        this.chartData = tree;
        this.dataSource.data = [tree];
        this.buildCalendar(tree);

        /** expand tree based on status */
        this.treeControl.dataNodes.forEach(node => {
          if (node.expanded) {
            this.treeControl.expand(node);
          } else {
            this.treeControl.collapse(node);
          }
        });
        console.log(tree);
      }
    });
  }
  moment = moment;
  dates: string[] = []; // all days in chart
  today = moment().format('YYYY-MM-DD');

  /** Map from flat node to nested node. This helps us finding the nested node to be modified */
  flatNodeMap: Map<TaskFlatNode, Task> = new Map<TaskFlatNode, Task>();

  /** Map from nested node to flattened node. This helps us to keep the same object for selection */
  nestedNodeMap: Map<Task, TaskFlatNode> = new Map<Task, TaskFlatNode>();

  treeControl: FlatTreeControl<TaskFlatNode>;
  treeFlattener: MatTreeFlattener<Task, TaskFlatNode>;
  dataSource: MatTreeFlatDataSource<Task, TaskFlatNode>;

  chartData;
  sidebarStyle = {};

  /** utils of building tree */
  transformer = (node: Task, level: number) => {
    const flatNode = new TaskFlatNode(!!node.tasks.length, level, node.name, node.progress, node.progressDates, node.dates, node.expanded);
    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  }

  private _getLevel = (node: TaskFlatNode) => node.level;

  private _isExpandable = (node: TaskFlatNode) => node.expandable;

  private _getChildren = (node: Task): Observable<Task[]> => of(node.tasks);

  hasChild = (_: number, _nodeData: TaskFlatNode) => _nodeData.expandable;
  /** end of utils of building tree */

  ngOnInit() {
  }

  /** tree nodes manipulations */
  updateTaskName(node: TaskFlatNode, name: string) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateTaskName(nestedNode, name);
  }

  addChildTask(node: TaskFlatNode) {
    console.log('id from component ' + this.id);
    const nestedNode = this.flatNodeMap.get(node);
    this.database.addChildTask(nestedNode);
  }

  deleteTask(node: TaskFlatNode) {
    // if root, ignore
    if (this.treeControl.getLevel(node) < 1) {
      return null;
    }

    const parentFlatNode = this.getParentTask(node);
    const parentNode = this.flatNodeMap.get(parentFlatNode);
    const childNode = this.flatNodeMap.get(node);
    this.database.deleteTask(parentNode, childNode);
  }

  getParentTask(node: TaskFlatNode) {
    const { treeControl } = this;
    const currentLevel = treeControl.getLevel(node);
    // if root, ignore
    if (currentLevel < 1) {
      return null;
    }
    const startIndex = treeControl.dataNodes.indexOf(node) - 1;
    // loop back to find the nearest upper node
    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];
      if (treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
  }

  toggleExpanded(node: TaskFlatNode) {
    const nestedNode = this.flatNodeMap.get(node);
    this.database.toggleExpaned(nestedNode);
  }

  updateProgress(node: TaskFlatNode, progress: number) {
    const nestedNode = this.flatNodeMap.get(node);
    const newProgressDates = this.database.updateProgress(nestedNode, progress);
    node.progressDates = newProgressDates;
  }

  updateDateRange(node: TaskFlatNode) {
    node.dates.start = this.moment(node.dates.start).format('YYYY-MM-DD'); // convert moment to string
    node.dates.end = this.moment(node.dates.end).format('YYYY-MM-DD'); // convert moment to string
    const nestedNode = this.flatNodeMap.get(node);
    /** rebuild calendar if the root is updated */
    if (node.level === 0) {
      this.buildCalendar(nestedNode);
    }
    /** update progress dates */
    const newProgressDates = this.database.updateDateRange(nestedNode);
    node.progressDates = newProgressDates;
  }

  /** resize and validate */
  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 200;
    if (
      event.rectangle.width &&
      (event.rectangle.width < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.sidebarStyle = {
      'width': `${event.rectangle.width}px`
    };
  }

  buildCalendar(step: Task) {
    const start = this.moment(step.dates.start);
    const end = this.moment(step.dates.end);
    const range = this.moment.range(start, end);

    const days = Array.from(range.by('days'));
    this.dates = days.map(d => d.format('YYYY-MM-DD'));
  }

}

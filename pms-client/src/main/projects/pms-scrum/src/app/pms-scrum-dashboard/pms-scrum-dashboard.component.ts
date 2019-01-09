import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectService} from '../../../../../src/app/services/project.service';
import {Story} from '../../../../../src/app/models/story';
import {BacklogItemService} from '../../../../../src/app/services/backlog-item.service';
import {StoryService} from '../../../../../src/app/services/story.service';
import {State} from '../../../../../src/app/models/State';
import {Task} from '../../../../../src/app/models/task';
import {TaskService} from '../../../../../src/app/services/task.service';
import * as Moment from 'moment';
import {extendMoment} from 'moment-range';

const moment = extendMoment(Moment);

@Component({
  selector: 'pms-scrum-dashboard',
  templateUrl: './pms-scrum-dashboard.component.html',
  styleUrls: ['./pms-scrum-dashboard.component.css']
})
export class PmsScrumDashboardComponent implements OnInit {

  stories: Map<State, Map<number, Story>>;

  states: State[] = [State.TODO, State.INPROGRESS, State.DONE];

  currentProjectId: any;
  data: any;

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private backlogItemService: BacklogItemService,
              private storyService: StoryService,
              private taskService: TaskService) {
    this.data = {};
    route.parent.params.subscribe(params => {
      this.currentProjectId = params['id'];
      this.refreshData();
    });
  }

  ngOnInit() {
  }

  refreshData() {
    this.stories = new Map<State, Map<number, Story>>();
    this.stories.set(State.TODO, new Map<number, Story>());
    this.stories.set(State.INPROGRESS, new Map<number, Story>());
    this.stories.set(State.DONE, new Map<number, Story>());

    this.projectService.getProjectBacklogItems(this.currentProjectId).subscribe(items => {
      items.forEach(item => {
        this.backlogItemService.getProductBacklogItemStories(item.id).subscribe(stories => {
          stories.forEach(story => {
            this.storyService.getStoryTasks(story.id).subscribe(tasks => {
              tasks.forEach(task => {
                this.states.forEach(state => {
                  if (task.taskState === state) {
                    if (!this.stories.get(state).has(story.id)) {
                      const copiedStory: Story = JSON.parse(JSON.stringify(story));
                      copiedStory.tasks = [];
                      this.stories.get(state).set(story.id, copiedStory);
                    }
                    this.stories.get(state).get(story.id).tasks.push(task);
                    this.transform();
                  }
                });
              });
            });
          });
        });
      });
    });
  }

  transform() {
    this.data = {};
    this.states.forEach(state => {
      this.data[state] = [];
      this.stories.get(state).forEach(story => {
        this.data[state].push(story);
      });
    });
  }

  toRight(task: Task, story: Story) {
    if (task.taskState === State.TODO) {
      task.realStartDate = moment().format('YYYY-MM-DD');
      task.taskState = State.INPROGRESS;
      this.taskService.updateTask(task).subscribe(res => {
        if (!this.stories.get(State.INPROGRESS).has(story.id)) {
          const copiedStory: Story = JSON.parse(JSON.stringify(story));
          copiedStory.tasks = [];
          this.stories.get(State.INPROGRESS).set(story.id, copiedStory);
        }
        this.stories.get(State.INPROGRESS).get(story.id).tasks.push(task);

        const todoStory = this.stories.get(State.TODO).get(story.id);
        const taskIndex = todoStory.tasks.findIndex(t => {
          return t.id === task.id;
        });
        if (taskIndex !== -1) {
          todoStory.tasks.splice(taskIndex, 1);
          if (todoStory.tasks.length === 0) {
            this.stories.get(State.TODO).delete(todoStory.id);
          }
        }
        this.transform();
      });
    } else if (task.taskState === State.INPROGRESS) {
      task.realEndDate = moment().format('YYYY-MM-DD');
      task.taskState = State.DONE;
      this.taskService.updateTask(task).subscribe(res => {
        if (!this.stories.get(State.DONE).has(story.id)) {
          const copiedStory: Story = JSON.parse(JSON.stringify(story));
          copiedStory.tasks = [];
          this.stories.get(State.DONE).set(story.id, copiedStory);
        }
        this.stories.get(State.DONE).get(story.id).tasks.push(task);

        const todoStory = this.stories.get(State.INPROGRESS).get(story.id);
        const taskIndex = todoStory.tasks.findIndex(t => {
          return t.id === task.id;
        });
        if (taskIndex !== -1) {
          todoStory.tasks.splice(taskIndex, 1);
          if (todoStory.tasks.length === 0) {
            this.stories.get(State.INPROGRESS).delete(todoStory.id);
          }
        }
        this.transform();
      });
    }
  }

  toLeft(task: Task, story: Story) {
    if (task.taskState === State.INPROGRESS) {
      task.realStartDate = null;
      task.taskState = State.TODO;
      this.taskService.updateTask(task).subscribe(res => {
        if (!this.stories.get(State.TODO).has(story.id)) {
          const copiedStory: Story = JSON.parse(JSON.stringify(story));
          copiedStory.tasks = [];
          this.stories.get(State.TODO).set(story.id, copiedStory);
        }
        this.stories.get(State.TODO).get(story.id).tasks.push(task);

        const todoStory = this.stories.get(State.INPROGRESS).get(story.id);
        const taskIndex = todoStory.tasks.findIndex(t => {
          return t.id === task.id;
        });
        if (taskIndex !== -1) {
          todoStory.tasks.splice(taskIndex, 1);
          if (todoStory.tasks.length === 0) {
            this.stories.get(State.INPROGRESS).delete(todoStory.id);
          }
        }
        this.transform();
      });
    } else if (task.taskState === State.DONE) {
      task.realEndDate = null;
      task.taskState = State.INPROGRESS;
      this.taskService.updateTask(task).subscribe(res => {
        if (!this.stories.get(State.INPROGRESS).has(story.id)) {
          const copiedStory: Story = JSON.parse(JSON.stringify(story));
          copiedStory.tasks = [];
          this.stories.get(State.INPROGRESS).set(story.id, copiedStory);
        }
        this.stories.get(State.INPROGRESS).get(story.id).tasks.push(task);

        const todoStory = this.stories.get(State.DONE).get(story.id);
        const taskIndex = todoStory.tasks.findIndex(t => {
          return t.id === task.id;
        });
        if (taskIndex !== -1) {
          todoStory.tasks.splice(taskIndex, 1);
          if (todoStory.tasks.length === 0) {
            this.stories.get(State.DONE).delete(todoStory.id);
          }
        }
        this.transform();
      });
    }
  }
}

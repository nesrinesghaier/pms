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

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService,
              private backlogItemService: BacklogItemService,
              private storyService: StoryService,
              private taskService: TaskService) {
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
        this.backlogItemService.getProductBacklogItemStories(item.getId()).subscribe(stories => {
          stories.forEach(story => {
            this.storyService.getStoryTasks(story.getId()).subscribe(tasks => {
              tasks.forEach(task => {
                this.states.forEach(state => {
                  if (task.getState() === state) {
                    if (!this.stories.get(state).has(story.getId())) {
                      this.stories.get(state).set(story.getId(), story);
                    }
                    this.stories.get(state).get(story.getId()).getTasks().push(task);
                  }
                });
              });
            });
          });
        });

      });
    });
  }

  toRight(task: Task, story: Story) {
    if (task.getState() === State.TODO) {
      task.setRealStartDate(moment().format('YYYY-MM-DD'));
      task.setState(State.INPROGRESS);
      if (!this.stories.get(State.INPROGRESS).has(story.getId())) {
        this.stories.get(State.INPROGRESS).set(story.getId(), story);
      }
      this.stories.get(State.INPROGRESS).get(story.getId()).getTasks().push(task);

      const todoStory = this.stories.get(State.TODO).get(story.getId());
      const taskIndex = todoStory.getTasks().findIndex(t => {
        return t.getId() === task.getId();
      });
      if (taskIndex !== -1) {
        todoStory.getTasks().splice(taskIndex, 1);
        if (todoStory.getTasks().length === 0) {
          this.stories.get(State.TODO).delete(todoStory.getId());
        }
      }
    } else if (task.getState() === State.INPROGRESS) {
      task.setState(State.DONE);
      task.setRealEndDate(moment().format('YYYY-MM-DD'));
      this.taskService.updateTask(task);
      if (!this.stories.get(State.DONE).has(story.getId())) {
        this.stories.get(State.DONE).set(story.getId(), story);
      }
      this.stories.get(State.DONE).get(story.getId()).getTasks().push(task);

      const todoStory = this.stories.get(State.INPROGRESS).get(story.getId());
      const taskIndex = todoStory.getTasks().findIndex(t => {
        return t.getId() === task.getId();
      });
      if (taskIndex !== -1) {
        todoStory.getTasks().splice(taskIndex, 1);
        if (todoStory.getTasks().length === 0) {
          this.stories.get(State.INPROGRESS).delete(todoStory.getId());
        }
      }
    }
  }

  toLeft(task: Task, story: Story) {
    if (task.getState() === State.DONE) {
      task.setRealEndDate('1970-01-01');
      task.setState(State.INPROGRESS);
      if (!this.stories.get(State.INPROGRESS).has(story.getId())) {
        this.stories.get(State.INPROGRESS).set(story.getId(), story);
      }
      this.stories.get(State.INPROGRESS).get(story.getId()).getTasks().push(task);

      const todoStory = this.stories.get(State.DONE).get(story.getId());
      const taskIndex = todoStory.getTasks().findIndex(t => {
        return t.getId() === task.getId();
      });
      if (taskIndex !== -1) {
        todoStory.getTasks().splice(taskIndex, 1);
        if (todoStory.getTasks().length === 0) {
          this.stories.get(State.DONE).delete(todoStory.getId());
        }
      }
    } else if (task.getState() === State.INPROGRESS) {
      task.setRealStartDate('1970-01-01');
      task.setState(State.TODO);
      this.taskService.updateTask(task);
      if (!this.stories.get(State.TODO).has(story.getId())) {
        this.stories.get(State.TODO).set(story.getId(), story);
      }
      this.stories.get(State.TODO).get(story.getId()).getTasks().push(task);

      const todoStory = this.stories.get(State.INPROGRESS).get(story.getId());
      const taskIndex = todoStory.getTasks().findIndex(t => {
        return t.getId() === task.getId();
      });
      if (taskIndex !== -1) {
        todoStory.getTasks().splice(taskIndex, 1);
        if (todoStory.getTasks().length === 0) {
          this.stories.get(State.INPROGRESS).delete(todoStory.getId());
        }
      }
    }
  }
}

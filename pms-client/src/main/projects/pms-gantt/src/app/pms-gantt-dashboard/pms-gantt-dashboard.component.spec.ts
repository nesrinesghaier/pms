import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsGanttDashboardComponent } from './pms-gantt-dashboard.component';

describe('PmsGanttDashboardComponent', () => {
  let component: PmsGanttDashboardComponent;
  let fixture: ComponentFixture<PmsGanttDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsGanttDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsGanttDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

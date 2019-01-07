import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsScrumDashboardComponent } from './pms-scrum-dashboard.component';

describe('PmsScrumDashboardComponent', () => {
  let component: PmsScrumDashboardComponent;
  let fixture: ComponentFixture<PmsScrumDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsScrumDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsScrumDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

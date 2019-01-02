import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PmsCostDashboardComponent } from './pms-cost-dashboard.component';

describe('PmsCostDashboardComponent', () => {
  let component: PmsCostDashboardComponent;
  let fixture: ComponentFixture<PmsCostDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PmsCostDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PmsCostDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

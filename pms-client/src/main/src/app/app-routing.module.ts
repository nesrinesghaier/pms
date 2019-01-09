import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicComponent} from './public/public.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {PmsCostDashboardComponent} from '../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component';
import {ChartComponent} from '../../projects/pms-gantt/src/app/chart/pms-gantt-chart.component';
import {PmsScrumDashboardComponent} from '../../projects/pms-scrum/src/app/pms-scrum-dashboard/pms-scrum-dashboard.component';
import {ProjectViewComponent} from './dashboard/projects/project-view/project-view.component';
import {ProductBacklogItemListComponent} from "./dashboard/product-backlog-item/product-backlog-item-list/product-backlog-item-list.component";

const routes: Routes = [{path: '', component: PublicComponent},
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'dashboard/project/:id', component: ProjectViewComponent,
    children: [
      {path: '', redirectTo: 'backlogs', pathMatch: 'full'},
      {path: 'backlogs', component: ProductBacklogItemListComponent},
      {path: 'cost', component: PmsCostDashboardComponent},
      {
        path: 'gantt', component: ChartComponent,
        children: [
          {path: 'charts', component: ChartComponent}
        ]
      },
      {path: 'scrum', component: PmsScrumDashboardComponent}
    ]
  }, {path: '*', redirectTo: '', pathMatch: 'full'}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

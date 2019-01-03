import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PmsCostDashboardComponent} from "../../projects/pms-cost/src/app/pms-cost-dashboard/pms-cost-dashboard.component";
import {MainComponent} from "./dashboard/main/main.component";

const routes: Routes = [{path: '', component: PublicComponent},
  {path: 'dashboard', component: DashboardComponent,
  children:[
    { path: '', component: MainComponent},
    { path: 'cost', component: PmsCostDashboardComponent},
    { path: 'scrum', component: PmsCostDashboardComponent},
    { path: 'gantt', component: PmsCostDashboardComponent}
  ]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

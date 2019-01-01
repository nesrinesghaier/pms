import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PublicComponent} from "./public/public.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [{path: '', component: PublicComponent},
  {path: 'dashboard', component: DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

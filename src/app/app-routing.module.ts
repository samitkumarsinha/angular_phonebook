import { AuthGuard } from './auth.guard';
import { PbcreateComponent } from './user/pbcreate/pbcreate.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './user/dashboard/dashboard.component';
import { ListComponent } from './user/list/list.component';
const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'admin', component: LoginComponent},
  {path : 'admin', children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'dashboard',canActivate: [AuthGuard],  component: DashboardComponent, children: [
      {path: 'list', component: ListComponent},
      {path: 'create', component: PbcreateComponent}
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

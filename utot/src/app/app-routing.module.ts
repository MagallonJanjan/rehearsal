import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiuserslistComponent } from './apiuserslist/apiuserslist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdatetaskComponent } from './updatetask/updatetask.component';

const routes: Routes = [
  {path : 'register' , component :RegisterComponent},
  {path: 'login' , component : LoginComponent},
  {path : '' , component : LandingpageComponent},
  {path : 'dashboard', component :DashboardComponent},
  {path : 'api', component : ApiuserslistComponent},
  {path : 'pagination', component : PaginationComponent},
  {path : 'dashboard/updatetask', component : UpdatetaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const Routers = 
[
  RegisterComponent,
  LoginComponent,
  LandingpageComponent,
  DashboardComponent,
  ApiuserslistComponent,
  PaginationComponent,
  UpdatetaskComponent
]
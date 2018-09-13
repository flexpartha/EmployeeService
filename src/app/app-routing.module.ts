import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeeBusinessdetail1Component } from './employee-businessdetail1/employee-businessdetail1.component';
import { EmployeeBusinessdetail2Component } from './employee-businessdetail2/employee-businessdetail2.component';

const routes: Routes = [
  {
    path: 'list',
    component:ListEmployeesComponent
  },
  {
    path: 'create',
    component:CreateEmployeeComponent,
    canDeactivate:[CreateEmployeeCanDeactivateGuardService]
  },
  {
    path:'employeeDetail/:id',
    component:EmployeeDetailsComponent,
    children:[
      {path:'employee-businessdetail1/employeedetail1',component:EmployeeBusinessdetail1Component},
      {path:'employee-businessdetail2/employeedetail2',component:EmployeeBusinessdetail2Component}
    ]
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

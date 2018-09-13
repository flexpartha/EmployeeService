import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeesService } from './employees/employees.service';
import { HttpModule } from '@angular/http';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { CreateEmployeeCanDeactivateGuardService } from './employees/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { EmployeefilterPipe } from './employee/employeefilter.pipe';
import { EmployeeBusinessdetail1Component } from './employee-businessdetail1/employee-businessdetail1.component';
import { EmployeeBusinessdetail2Component } from './employee-businessdetail2/employee-businessdetail2.component';


@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    EmployeefilterPipe,
    EmployeeBusinessdetail1Component,
    EmployeeBusinessdetail2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [EmployeesService, CreateEmployeeCanDeactivateGuardService]
})
export class AppModule { }

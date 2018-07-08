import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service';
import { Iemployee } from '../employee/iemployee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {

  employeeData:Iemployee[];
  empdata:Iemployee;
  constructor(private _employeeService:EmployeesService,private _router:Router) { }

  ngOnInit() {
    this._employeeService.getAllEmployees()
    .subscribe((EData)=>this.employeeData=EData)
  }
  
  handleNotify(eventData:Iemployee){
    this.empdata=eventData;
  }

  onClick(empId:number)
  {
    this._router.navigate(['/employeeDetail',empId]);
  }
}

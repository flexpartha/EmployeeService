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
  searchTerm:string;
  constructor(private _employeeService:EmployeesService,private _router:Router) { }

  ngOnInit() {
    this._employeeService.getAllEmployees()
    .subscribe((EData)=>this.employeeData=EData)
  }
  
  changeFirstname()
  {
    this.employeeData[0].name="JORDON";
    //PURE PIPES
    // let newEmployeeArray:Iemployee[]=Object.assign([],this.employeeData);
    // newEmployeeArray[0].name="JORDON";
    // this.employeeData=newEmployeeArray;
  }

  handleNotify(eventData:Iemployee){
    this.empdata=eventData;
  }

  onClick(empId:number)
  {
    this._router.navigate(['/employeeDetail',empId]);
  }
}

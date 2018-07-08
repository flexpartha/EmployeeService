import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Iemployee } from '../employee/iemployee';
import { EmployeesService } from './employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  private _id:number;
  private employee:Iemployee;
  constructor(private _route:ActivatedRoute,private _employeeService:EmployeesService,
          private _router:Router) { }

  ngOnInit() {
      this._route.paramMap.subscribe(params=>{
      this._id=+params.get('id');
      this._employeeService.getEmployeeById(this._id).subscribe((employeeData)=>this.employee=employeeData);
    })
    
  }

  viewNextEmployee(){
    if(this._id < 3){
      this._id=this._id+1;
    }else{
      this._id=1;
    }
    this._router.navigate(['/employeeDetail',this._id]);
  }
}

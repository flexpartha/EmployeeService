import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Idepartments } from '../employee/idepartments';
import { Iemployee } from '../employee/iemployee';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  @ViewChild('employeeForm') public createEmployeeForm:NgForm;
  photoPreview=false;
  //gender='male';
  //isActive=true;
  //department=3;
  
  employee:Iemployee={
    id:null,
    name:null,
    gender:null,
    email:'',
    phoneNumber:null,
    contactPreference:null,
    dateofBirth:null,
    department:null,
    isActive:null,
    photoPath:null
  }

  departments:Idepartments[]=[
    {id:1,name:"Help Desk"},
    {id:2,name:"HR"},
    {id:3,name:"IT"},
    {id:4,name:"Payroll"},
    {id:5,name:"Admin"}
  ];
  constructor() { }

  ngOnInit() {
  }

  saveEmployee(newemployee:Iemployee):void{
    console.log(newemployee);
  }

  togglePhotoPreview()
  {
    this.photoPreview=!this.photoPreview;
  }
}

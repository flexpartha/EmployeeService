import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee.component';

@Injectable()
export class CreateEmployeeCanDeactivateGuardService implements CanDeactivate<CreateEmployeeComponent> {

  canDeactivate(component: CreateEmployeeComponent): boolean{
    if(component.createEmployeeForm.dirty){
      return confirm("Are You sure to discard your changes?");
    }
    return true;
  };
  constructor() { }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Iemployee } from './iemployee';

@Pipe({
  name: 'employeefilter',
  pure:false
})
export class EmployeefilterPipe implements PipeTransform {

  transform(employee:Iemployee[],searchTerm:string): Iemployee[] {
      if(!employee || !searchTerm){
        return employee;
      }
      else{
        return employee.filter(employees=>
          employees.name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
      }
  }

}

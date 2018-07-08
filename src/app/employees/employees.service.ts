import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Iemployee } from '../employee/iemployee';

const employee:Iemployee[]=[];

@Injectable()
export class EmployeesService {
  private employeesUrl = "http://localhost:3000/employees";
  constructor(private _http:Http) { }

  getAllEmployees():Observable<Iemployee[]>{
    return this._http.get(this.employeesUrl)
    .map((response:Response)=><Iemployee[]>response.json())
    .catch(this.handleError);
    
  }

  getEmployeeById(id:number):Observable<Iemployee>{
    return this._http.get(this.employeesUrl +"/"+ id)
    .map((response:Response)=><Iemployee>response.json())
    .catch(this.handleError);
  }
  handleError(error:Response)
  {
    console.error(error);
    return Observable.throw(error);
  }
}

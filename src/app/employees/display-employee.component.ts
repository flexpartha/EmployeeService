import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Iemployee } from '../employee/iemployee';
import { strictEqual } from 'assert';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {

  @Input() employee:Iemployee;
  //@Output() notify:EventEmitter<string>=new EventEmitter<string>();
  //if we pass array of value in one h1 property
  @Output() notify:EventEmitter<Iemployee>=new EventEmitter<Iemployee>();
  constructor() { }

  ngOnInit() {
  }

  handleClick()
  {
    //this.notify.emit(this.employee.name);
    this.notify.emit(this.employee);
  }
}

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBusinessdetail2Component } from './employee-businessdetail2.component';

describe('EmployeeBusinessdetail2Component', () => {
  let component: EmployeeBusinessdetail2Component;
  let fixture: ComponentFixture<EmployeeBusinessdetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBusinessdetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBusinessdetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeBusinessdetail1Component } from './employee-businessdetail1.component';

describe('EmployeeBusinessdetail1Component', () => {
  let component: EmployeeBusinessdetail1Component;
  let fixture: ComponentFixture<EmployeeBusinessdetail1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBusinessdetail1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBusinessdetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

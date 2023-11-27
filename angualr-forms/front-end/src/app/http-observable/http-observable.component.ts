import { Component, OnInit } from '@angular/core';
import { HttpObservableService } from './http-observable.service';

@Component({
  selector: 'app-http-observable',
  templateUrl: './http-observable.component.html',
  styleUrls: ['./http-observable.component.scss']
})
export class HttpObservableComponent implements OnInit {

  employeeData:any;
  // export interface Iemployee{

  // }

  constructor(
    private httpService: HttpObservableService
  ) {

  }
  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee() {
    this.httpService.getEmployee().subscribe(data => {
      console.log('data employee--', data)
      this.employeeData = data;
    }, error => {
      console.log('error---', error)
    })
    
    this.httpService.getEmployeeObs().subscribe(data => {
      console.log('observable employee--', data)
    }, error => {
      console.log(' observable error---', error)
    })
  }

}

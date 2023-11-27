import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from 'src/assets/data/employee';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpObservableService {

  _url:string = '../assets/data/employee.json'

  constructor(
    private http:HttpClient
  ) { }

  getEmployee(){
    return this.http.get(this._url);
  }

  getEmployeeObs():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
    .pipe(catchError(this.errorHandler))
  }

  errorHandler(error: HttpErrorResponse) {
      return throwError(() => new Error('Your error'))
     // (error.message || "server error.");
  }
}

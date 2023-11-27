import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataSource = new BehaviorSubject<{ apiResponse: any; text: string }>({
    apiResponse: null,
    text: ''
  });

  data$ = this.dataSource.asObservable();


  constructor() {}

   // Method to update the API response data
   updateApiResponse(data: any) {
    const currentData = this.dataSource.getValue();
    this.dataSource.next({ ...currentData, apiResponse: data });
  }

  // Method to update the text data
  updateText(text: string) {
    const currentData = this.dataSource.getValue();
    this.dataSource.next({ ...currentData, text: text });
  }
}

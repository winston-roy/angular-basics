import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //template: '<app-child [message]="parentMessage"></app-child>'
})
export class AppComponent implements OnInit {
  title = 'Angualr Basics';
  public message:any;
  parentMessage = 'Hello from Parent!';


  constructor(private dataService: DataService) {}
 
  ngOnInit(): void {
    this.dataService.data$.subscribe(message => {
      console.log("message---", message)
      this.message = message.text;
    });
  }

  updateMessage(language:string) {
    this.dataService.updateText(language);
  }

}

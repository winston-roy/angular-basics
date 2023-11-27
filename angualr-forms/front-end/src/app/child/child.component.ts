import { Component, Input, OnInit} from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Input() message:string = '';
  name = 'Winston Roy Pashan';
  desc = 'Welcome to code evalution';
  obj = {
    'first name':'Winston',
    'second name':'Roy',
    'sir name':'Pashan'
  };
  num:any = 5.678;
  today = new Date();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.data$.subscribe(msg => {
      console.log("message---", msg)
    });
    console.log("this.msg---", this.message)
  }

  updateMessage(language:string) {
    this.dataService.updateText(language);
  }
}

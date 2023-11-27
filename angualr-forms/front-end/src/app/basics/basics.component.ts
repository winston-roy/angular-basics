import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styleUrls: ['./basics.component.scss']
})
export class BasicsComponent  implements OnInit{

title = 'basic component';
myValue = 'roy';
isDisabled:boolean = true;
hasError = false;
isSpeacial = false;

messageClass = {
  'text-success': !this.hasError,
  'text-danger': this.hasError,
  'text-speacial': this.isSpeacial
}

messageStyle = {
  'color':'orange',
  'font-style':'italic'
}

greet:any = 'Welcome';
isShowFistName:boolean = false;
selectedColor:any = 'Red';
names:any = [];


ngOnInit(): void {
 // throw new Error('Method not implemented.');

  console.log('my value---',this.myValue);
  this.isShowFistName = true;
  this.names = ["Winston", "Roy", "Pashan", "Delvin", "Melroy", "Denzil"]
}

greetUser(){
  return ' Good night';
}

onClick($event:any){
console.log('event---',$event);
this.greet = $event;//"Good niight";
}

}

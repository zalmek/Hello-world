import { Component, OnInit, Input, Output, EventEmitter, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  tort:string
  @Output() onChanged=new EventEmitter<boolean>()
  change(changed) {
    this.onChanged.emit(changed)
  }
  name='good';
  @Input() userName:string;
  _userAge:number;
  @Input()
  set userAge(age:number){
    if(age<0){
      this._userAge = 0;
    }
    else if (age>100){
      this,this._userAge=100
    }
    else {
      this._userAge=age
    }
  }
  get userAge(){
    return this._userAge
  }
  constructor() { }
  
}

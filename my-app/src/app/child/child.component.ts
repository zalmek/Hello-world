import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() userName:string
  @Output() userNameChange=new EventEmitter<string>()
  OnNameChange(newName:string) {
    this.userName=newName
    this.userNameChange.emit(newName)
  }
  
  @Output() onChanged=new EventEmitter<boolean>()
  change(increased) {
    this.onChanged.emit(increased)
  }
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
  ngOnInit() {
  }

}

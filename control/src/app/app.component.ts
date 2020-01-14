import { Component,OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  clicks: number = 0
  age: number = 23
  name: string = 'place'
  title = 'my-app'
  n:number=1
  onChanged(changed) {
    if (changed) {
      this.clicks = this.clicks + 1
    }
    else {

      this.clicks = this.clicks - 1
    }
  }
 //if (clicks>25*n){
  //  n+ 0,25
  
 // }
  ngOnInit() { console.log(); }
  ngOnChanges() { console.log(); }
  ngDoCheck() { console.log(); }
  ngAfterContentInit() { console.log(); }
  ngAfterContentChecked() { console.log(); }
  ngAfterViewInit() { console.log(); }
  ngAfterViewChecked() { console.log(); }
  ngOnDestroy() { console.log(); }
}

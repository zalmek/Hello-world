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
  onChanged(changed) {
    if (changed) {
      this.clicks = this.clicks + 1
    }
    else {

      this.clicks = this.clicks - 1
    }
  }
  ngOnInit() { console.log('Oninit'); }
  ngOnChanges() { console.log("OnInit"); }
  ngDoCheck() { console.log('DoCheck'); }
  ngAfterContentInit() { console.log('AfterContentInit'); }
  ngAfterContentChecked() { console.log('AfterContentChecked'); }
  ngAfterViewInit() { console.log('AfterViewInit'); }
  ngAfterViewChecked() { console.log('AfterViewChecked'); }
  ngOnDestroy() { console.log('OnDestroy'); }
}

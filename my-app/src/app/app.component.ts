import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicks:number=0
  age : number = 23
  name:string= 'place'
  title = 'my-app'
  constructor(private router: Router) {}
  GoHome(){
    this.router.navigate([''])
  }
  onChanged(increased){
    if(increased){
      this.clicks=this.clicks+1
    }
    else{

this.clicks=this.clicks-1
    }
  }
}
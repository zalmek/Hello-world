import { Component, OnInit } from '@angular/core';
import { create } from 'domain';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  City: string;
  Country: string;
    entered = false;
    elements = [];

  constructor() { }

  ngOnInit() {
    this.elements=JSON.parse(localStorage.getItem("items"));
    if (this.elements==null){
      this.elements=[];
    }
    this.City = ''
    this.Country = ''
  }
  New_point(){
    this.elements.push({City:this.City,Country:this.Country});
    localStorage.setItem("elements",JSON.stringify(this.elements));
    }
  }

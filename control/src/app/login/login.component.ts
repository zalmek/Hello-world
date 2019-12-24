import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: string
  pass: string
  entered = false
  constructor() { }

  ngOnInit() {
    this.login = 'admin1'
    this.pass = 'qwerty'
  }
  MakeLogin() {
    console.log(this.login);
    console.log(this.pass);

    if (this.login == "admin" && this.pass == 'qwerty') {
      console.log("You are in!!!")
      this.entered = true
    } else {
      const pass = localStorage.getItem("pass");
      const log = localStorage.getItem("login");
      console.log(pass);
      console.log(log);
      
      
      if (pass == this.pass && log == this.login) {
        this.entered = true;
      } else {
        this.entered = false;
        localStorage.setItem("login", this.login)
        localStorage.setItem("pass", this.pass)
      }
    }
  }
}


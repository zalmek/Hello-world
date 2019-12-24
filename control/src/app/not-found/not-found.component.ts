import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
num=3.324324763432793297242654625378754124612544325474454254261341671924254245432654325475475657254725478215475271542345645647283542754728452341527547654712547545623465421854236412548217424576242345744587456;
string="Angular is awesome!" 
constructor() { }

  ngOnInit() {
    console.log(this.num);
    
  }

}

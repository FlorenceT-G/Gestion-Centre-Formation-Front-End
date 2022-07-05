import { Component, OnInit } from '@angular/core';
import { Assistant } from 'src/app/models/Assistant.model';

@Component({
  selector: 'app-a-accueil',
  templateUrl: './a-accueil.component.html',
  styleUrls: ['./a-accueil.component.css']
})
export class AAccueilComponent implements OnInit {

  userString!:any
  userObject!:Assistant
  validUser=false
  constructor() { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    } 

  }

}

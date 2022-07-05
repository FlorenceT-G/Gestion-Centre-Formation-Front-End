import { Component, OnInit } from '@angular/core';
import { Commercial } from 'src/app/models/Commercial.model';

@Component({
  selector: 'app-c-accueil',
  templateUrl: './c-accueil.component.html',
  styleUrls: ['./c-accueil.component.css']
})
export class CAccueilComponent implements OnInit {

  userString!:any
  userObject!:Commercial
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

import { Component, OnInit } from '@angular/core';
import { Formateur } from 'src/app/models/Formateur';

@Component({
  selector: 'app-formateur-accueil',
  templateUrl: './formateur-accueil.component.html',
  styleUrls: ['./formateur-accueil.component.css']
})
export class FormateurAccueilComponent implements OnInit {

  userString!:any
  userObject!:Formateur
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

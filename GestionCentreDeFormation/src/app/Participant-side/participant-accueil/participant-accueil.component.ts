import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participant-accueil',
  templateUrl: './participant-accueil.component.html',
  styleUrls: ['./participant-accueil.component.css']
})
export class ParticipantAccueilComponent implements OnInit {

  userString!:any
  userObject!:Participant
  validUser=false

  formationsVenir!:Formation[]

  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    } 

    this.recuperer();
  }


  recuperer(){
  
    this.allService.getProchainesFormations().subscribe(
      response => {this.formationsVenir=response;}
    )

  }

}

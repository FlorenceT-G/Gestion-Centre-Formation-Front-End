import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participant-paiements',
  templateUrl: './participant-paiements.component.html',
  styleUrls: ['./participant-paiements.component.css']
})
export class ParticipantPaiementsComponent implements OnInit {

  userString!:any
  userObject!:Participant
  validUser=false
  paiements!:Paiement[]
  listeFormationsPasPayees!:Formation[]
  restePaiements!:number[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    } 
    this.recupererPaiements();
    this.recupererFormationsPasPayees()
  }

  recupererPaiements(){
    this.allService.getAllPaiementParticipant(this.userObject.idUtilisateur).subscribe(
      response => {this.paiements=response;}
  
      
          )
  }

  recupererFormationsPasPayees(){
    this.allService.getFormationPasPayeesByParticipant(this.userObject.idUtilisateur).subscribe(
      response => {this.listeFormationsPasPayees=response;
          console.log(response)
          this.restePaiements=[];
          for (let j=0; j<response.length; j=j+1){
            this.allService.getRestePaiement(this.userObject.idUtilisateur, response[j].idFormation).subscribe(
              reste=>{
                this.restePaiements.splice(j,0,reste);
                }
            )
          };}
          )
  }

  payerParticipant(idFormation:number){
    this.router.navigateByUrl('addPaiementParticipant/'+idFormation)
  }

  accueil(){
    this.router.navigateByUrl('participant-accueil');
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/Assistant.model';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { Relance } from 'src/app/models/Relance';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-gestion-paiements',
  templateUrl: './a-gestion-paiements.component.html',
  styleUrls: ['./a-gestion-paiements.component.css']
})
export class AGestionPaiementsComponent implements OnInit {

  participants!:Participant[]
  paiements!:Paiement[]

  userString!:any
  userObject!:Assistant

  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user')
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString)
    }
    this.recupererParticipants();
    this.recupererPaiements();
  
  }

  recupererParticipants(){
    this.allService.getAllParticipant().subscribe(
      response => {this.participants=response;
        for (let i=0; i<this.participants.length; i=i+1){
          this.allService.getFormationByParticipant(this.participants[i].idUtilisateur).subscribe(
            response=>{this.participants[i].listeFormations=response;
                    this.participants[i].restePaiements=[];
                    for (let j=0; j<response.length; j=j+1){
                      this.allService.getRestePaiement(this.participants[i].idUtilisateur, response[j].idFormation).subscribe(
                        reste=>{
                          this.participants[i].restePaiements.splice(j,0,reste);
                          }
                      )
                    };})
      
        };
      }
    )
  }

  recupererPaiements(){
    this.allService.getAllPaiement().subscribe(
      response => {this.paiements=response;}
  
      
          )
  }

  supprimer(id:number){
    this.allService.deletePaiement(id).subscribe(
      response=>{this.recupererPaiements();
                this.router.navigateByUrl('a-gestion-paiements');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierPaiement/'+id);
  }

  ajouterPaiement(){
    this.router.navigateByUrl('addPaiement');
  }

  accueil(){
    this.router.navigateByUrl('assistant');
  }

  relancer(idParticipant:number, idFormation:number){
    console.log("insertion relance")
    // nouvelle relance
    let r:Relance = new Relance();
    r.assistant = this.userObject;
    this.allService.getByIdParticipant(idParticipant).subscribe(
      res => r.participant = res
     );

     // insertion relance dans la bdd
     this.allService.insererRelance(r, idParticipant, this.userObject.idUtilisateur).subscribe()

     console.log("send mail")
     // envoie du mail de relance
     this.allService.sendMailRelancePaiement(idParticipant, idFormation).subscribe()
  }


}


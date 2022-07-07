import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-gestion-paiements',
  templateUrl: './a-gestion-paiements.component.html',
  styleUrls: ['./a-gestion-paiements.component.css']
})
export class AGestionPaiementsComponent implements OnInit {

  participants!:Participant[]
  paiements!:Paiement[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recupererParticipants();
    this.recupererPaiements();
  
  }
  recupererParticipants(){
    this.allService.getAllParticipant().subscribe(
      response => {this.participants=response;
        for (let i=0; i<this.participants.length; i=i+1){
          this.allService.getFormationByParticipant(this.participants[i].idUtilisateur).subscribe(
            response=>{this.participants[i].listeFormations=response;}
          )
        }
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
  relancer(id:number){
    this.router.navigateByUrl('relancerParticipant/'+id);
  }


}

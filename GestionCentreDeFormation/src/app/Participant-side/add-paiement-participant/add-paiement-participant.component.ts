import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-paiement-participant',
  templateUrl: './add-paiement-participant.component.html',
  styleUrls: ['./add-paiement-participant.component.css']
})
export class AddPaiementParticipantComponent implements OnInit {

  userString!:any
  userObject!:Participant
  bool=false
  errorMsg="Le montant saisi est incorrect"

  paiement !:Paiement;
  formation!:Formation

  constructor(private allService: GetAllService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.paiement = new Paiement();
    this.userString = sessionStorage.getItem('user');
    this.userObject = JSON.parse(this.userString);
    this.getFormation();
     
    
  }

  getFormation(){
    const id=+this.route.snapshot.params['id']
    this.allService.getByIdFormation(id).subscribe(
      response => {this.formation=response;})
  }



  SavePaiement(){

    this.paiement.participant=this.userObject
    this.paiement.formation=this.formation;
    this.allService.getRestePaiement(this.userObject.idUtilisateur,this.formation.idFormation).subscribe(
      resteRep=>{
              if (resteRep-this.paiement.montant<0){
                  this.bool=true;
                  this.router.navigateByUrl('addPaiementParticipant/'+this.formation.idFormation);
              }
              else{
              this.paiement.reste=resteRep-this.paiement.montant;
              this.paiement.datePaiement=new Date();
              this.allService.insererPaiement(this.paiement).subscribe(
              insererOk=>{
                    this.router.navigateByUrl('participant-paiements')});
                  };}
              )
      }

}

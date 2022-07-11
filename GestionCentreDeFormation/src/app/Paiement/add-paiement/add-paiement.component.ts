import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-paiement',
  templateUrl: './add-paiement.component.html',
  styleUrls: ['./add-paiement.component.css']
})
export class AddPaiementComponent implements OnInit {

  uti!: Utilisateur
  paiement !:Paiement;
  idUtilisateur!:number
  idFormation!:number

  formations!: Formation[];
  participants!: Participant[];
  bool=false
  montantIncorrect=false
  tamp!:number
  errorMsg="Ce participant n'est pas inscrit à cette formation ou a déjà réglé cette formation"
  errorMontant="Le montant saisi est incorrect"


  constructor(private Service : GetAllService,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.paiement = new Paiement();
    this.tamp=0

    this.Service.getParticipantByPaiementNok().subscribe(
      response => {this.participants =response;}
    )
    this.Service.getAllFormations().subscribe(
      response => {this.formations =response;}
    )
  }

  SavePaiement(){

    this.Service.getByIdParticipant(this.idUtilisateur).subscribe(
      response=>{this.paiement.participant=response}
    )
  
    this.Service.getFormationPasPayeesByParticipant(this.idUtilisateur).subscribe(
    response=> {
      this.Service.getByIdFormation(this.idFormation).subscribe(
        res=>{
          for (let i=0; i<response.length; i=i+1){

            if(res.idFormation === response[i].idFormation){
              
              this.paiement.formation=res;
              this.Service.getRestePaiement(this.idUtilisateur,this.idFormation).subscribe(
                resteRep=>{
                  if (resteRep-this.paiement.montant<0){
                      this.montantIncorrect=true;
                      this.router.navigateByUrl('addPaiement');
                  }
                  else{
                  this.paiement.reste=resteRep-this.paiement.montant;
                  this.paiement.datePaiement=new Date();
                  this.Service.insererPaiement(this.paiement).subscribe(
                  insererOk=>{var obj = JSON.parse(sessionStorage['user']);
                  if (obj) {
                    this.uti = obj;
                    if (this.uti.role.libRole === "admin") {
                      this.router.navigateByUrl('admin');
                    }
                    else{
                      this.router.navigateByUrl('a-gestion-paiements');
                    }}});
                  }
                })
              this.tamp=1;
              break;
            }
          }
          if(this.tamp==0){
              this.bool=true
              this.router.navigateByUrl('addPaiement');
          }
          })
        }
      )
      }
  
  
}
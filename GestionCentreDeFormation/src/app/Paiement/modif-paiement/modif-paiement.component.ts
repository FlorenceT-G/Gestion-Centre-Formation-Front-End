import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Paiement } from 'src/app/models/Paiement';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-modif-paiement',
  templateUrl: './modif-paiement.component.html',
  styleUrls: ['./modif-paiement.component.css']
})
export class ModifPaiementComponent implements OnInit {

  paiement !:Paiement;
  idFormation!:number

  formations!: Formation[];
  participants!: Participant[];
  bool=false
  tamp!:number
  errorMsg="Ce participant n'est pas inscrit à cette formation ou a déjà réglé cette formation"


  constructor(private Service : GetAllService,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.paiement = new Paiement();
    this.getPaiement();
    this.tamp=0

    this.Service.getParticipantByPaiementNok().subscribe(
      response => {this.participants =response;}
    )
    this.Service.getAllFormations().subscribe(
      response => {this.formations =response;}
    )
  }


  getPaiement(){
    const id=+this.route.snapshot.params['id']
    this.Service.getByIdPaiement(id).subscribe(
      response => {this.paiement=response;
      console.log(this.paiement)})
  }

  SavePaiement(){


    this.Service.getFormationPasPayeesByParticipant(this.paiement.participant.idUtilisateur).subscribe(
    response=> {
      this.Service.getByIdFormation(this.idFormation).subscribe(
        res=>{
          for (let i=0; i<response.length; i=i+1){

            if(res.idFormation === response[i].idFormation){
              
              this.paiement.formation=res;
              this.Service.getRestePaiement(this.paiement.participant.idUtilisateur,this.idFormation).subscribe(
                resteRep=>{
    
                  this.paiement.reste=resteRep-this.paiement.montant;
                  this.paiement.datePaiement=new Date();
                  this.Service.modifierPaiement(this.paiement).subscribe(
                  insererOk=>{
                    this.tamp=1;
                    this.router.navigateByUrl('a-gestion-paiements');});
                  }
              )
              break;
            }
          }
          if(this.tamp==0){
              this.bool=true
              const id=+this.route.snapshot.params['id']
              this.router.navigateByUrl('modifierPaiement/+id');
          }
          })
        }
      )
      }


    
  

}

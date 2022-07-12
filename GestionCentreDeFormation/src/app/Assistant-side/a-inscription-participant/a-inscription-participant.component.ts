import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/Assistant.model';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-inscription-participant',
  templateUrl: './a-inscription-participant.component.html',
  styleUrls: ['./a-inscription-participant.component.css']
})
export class AInscriptionParticipantComponent implements OnInit {

  lProspects!:Prospect[]
  userString!:any
  userObject!:Assistant
  validUser=false

  participants!: Participant[];
  formationsAVenir!: Formation[];
  idFormation!:number;
  idUtilisateur!:number
  msgError="Ce participant est déjà inscrit à cette formation"
  error=false;

  constructor(private all:GetAllService,  private router : Router) { }

  ngOnInit(): void {
    this.all.getProspectAInscrire().subscribe(
      liste => {
        this.lProspects = liste;
      })

    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    }

    this.all.getAllParticipant().subscribe(
      response => {this.participants =response;}
    )

    this.all.getProchainesFormations().subscribe(
      response => {this.formationsAVenir =response;}
    )

    this.error=false;

    
  }

  inscrire() {
    for(let prospect of this.lProspects) {
      this.all.insererParticpantParProspect(prospect).subscribe(
        response => {
          // la réponse récupère l'identifiant du participant juste inscrit
          // transformation de l'objet en string pour le parse en number
          var s = JSON.stringify(response);
          var id = parseInt(s);
          // envoie du mail
          this.all.sendMailInscription(id).subscribe(
            fait => this.reload()
          )
        }
      )
    }
  }

  reload() {
    this.all.getProspectAInscrire().subscribe(
      liste => {
        this.lProspects = liste
      }
    )
  }

  SaveInscription(){
    this.all.getByIdFormation(this.idFormation).subscribe(
      formationReponse=>{
            this.all.getFormationByParticipant(this.idUtilisateur).subscribe(
            response=>{
            for(let i=0; i<response.length; i=i+1){
                if (response[i].idFormation==formationReponse.idFormation){
                  this.error=true;
                  this.router.navigateByUrl('a-inscription-participant')
                }
            };
            if(this.error==false){
            this.all.inscrireParticipantAFormation(this.idUtilisateur, this.idFormation).subscribe(
            response=>{
            this.router.navigateByUrl('a-gestion-paiements');}  )   }
        }
    )
  })
  }

}

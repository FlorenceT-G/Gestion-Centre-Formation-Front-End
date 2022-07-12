import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participant-formations',
  templateUrl: './participant-formations.component.html',
  styleUrls: ['./participant-formations.component.css']
})
export class ParticipantFormationsComponent implements OnInit {

  userString!:any
  userObject!:Participant

  formationsEncoursAll!:Formation[]
  formationsVenirAll!:Formation[]
  formationsPasseesAll!:Formation[]

  formationsEncours!:Formation[]
  formationsVenir!:Formation[]
  formationsPassees!:Formation[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    this.userObject = JSON.parse(this.userString);
    this.recuperer();
  }



  recuperer(){
    this.allService.getAllFormationEnCours().subscribe(
      response => {this.formationsEncoursAll=response;
        this.formationsEncours=[];
        for (let i=0; i<this.formationsEncoursAll.length; i=i+1){

          for (let j=0; j<this.formationsEncoursAll[i].listeParticipants.length; j=j+1){
          if (this.formationsEncoursAll[i].listeParticipants[j].idUtilisateur==this.userObject.idUtilisateur){
                this.formationsEncours.push(this.formationsEncoursAll[i]);
          }
          }
        };
      })

    this.allService.getProchainesFormations().subscribe(
      response => {this.formationsVenirAll=response;
        this.formationsVenir=[];
        for (let i=0; i<this.formationsVenirAll.length; i=i+1){

          for (let j=0; j<this.formationsVenirAll[i].listeParticipants.length; j=j+1){
          if (this.formationsVenirAll[i].listeParticipants[j].idUtilisateur==this.userObject.idUtilisateur){
                this.formationsVenir.push(this.formationsVenirAll[i]);
          }
          }
        };
      
      }
    )

    this.allService.getHistoriqueFormations().subscribe(
      response => {this.formationsPasseesAll=response;
        this.formationsPassees=[];
        for (let i=0; i<this.formationsPasseesAll.length; i=i+1){

          for (let j=0; j<this.formationsPasseesAll[i].listeParticipants.length; j=j+1){
          if (this.formationsPasseesAll[i].listeParticipants[j].idUtilisateur==this.userObject.idUtilisateur){
                this.formationsPassees.push(this.formationsPasseesAll[i]);
          }
          }
        };

      }
    )

  }

  certif(idFormation:number) {
    this.allService.sendMailDiploma(this.userObject.idUtilisateur, idFormation).subscribe(
      res => alert("Un mail vous a été envoyé ! \nVeuillez vérifier votre boîte de réception")
    )
    
  }

  accueil(){
    this.router.navigateByUrl('participant');
  }


}

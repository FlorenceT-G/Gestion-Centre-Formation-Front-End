import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { Quiz } from 'src/app/models/Quiz.model';
import { Score } from 'src/app/models/Score.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participant-formations',
  templateUrl: './participant-formations.component.html',
  styleUrls: ['./participant-formations.component.css']
})
export class ParticipantFormationsComponent implements OnInit {

  userString!: any
  userObject!: Participant

  formationsEncoursAll!: Formation[]
  formationsVenirAll!: Formation[]

  formationsEncours!: Formation[]
  formationsVenir!: Formation[]

  mapScoresFormations = new Map();

  constructor(private allService: GetAllService, private router: Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    this.userObject = JSON.parse(this.userString);
    this.recuperer();
    this.getUserScores();

    this.getParticipantScores_FormationPassees();
  }

  getUserScores() {
    this.allService.getScoreByIdParticipant(this.userObject.idUtilisateur).subscribe(
      res => { this.userObject.scores = res }
    )
  }


  recuperer() {
    this.allService.getAllFormationEnCours().subscribe(
      response => {
        this.formationsEncoursAll = response;
        this.formationsEncours = [];
        for (let i = 0; i < this.formationsEncoursAll.length; i = i + 1) {

          for (let j = 0; j < this.formationsEncoursAll[i].listeParticipants.length; j = j + 1) {
            if (this.formationsEncoursAll[i].listeParticipants[j].idUtilisateur == this.userObject.idUtilisateur) {
              this.formationsEncours.push(this.formationsEncoursAll[i]);
            }
          }
        };
      })

    this.allService.getProchainesFormations().subscribe(
      response => {
        this.formationsVenirAll = response;
        this.formationsVenir = [];
        for (let i = 0; i < this.formationsVenirAll.length; i = i + 1) {

          for (let j = 0; j < this.formationsVenirAll[i].listeParticipants.length; j = j + 1) {
            if (this.formationsVenirAll[i].listeParticipants[j].idUtilisateur == this.userObject.idUtilisateur) {
              this.formationsVenir.push(this.formationsVenirAll[i]);
            }
          }
        };

      }
    )
  }

  certif(idFormation: number) {
    this.allService.sendMailDiploma(this.userObject.idUtilisateur, idFormation).subscribe(
      res => alert("Un mail vous a été envoyé ! \nVeuillez vérifier votre boîte de réception")
    )

  }

  getParticipantScores_FormationPassees() {   

    let lFormations: any
    let lFormationsPassee = new Array();

    this.allService.getHistoriqueFormations().subscribe(
      response => {
        lFormations = response;
        for (let f of lFormations) {
          for (let lp of f.listeParticipants) {
            if (lp.idUtilisateur == this.userObject.idUtilisateur) {
              lFormationsPassee.push(f);
            }
          }
        };

        for (let lf of lFormationsPassee) {
          if (lf.listeQuiz.length != 0) {
            for (let lq of lf.listeQuiz) {
              const scoreQuiz = this.userObject.scores.find((Score) => Score.quiz.idQuiz == lq.idQuiz)
              if (scoreQuiz) {
                this.mapScoresFormations.set(lf, scoreQuiz)
              } 
              else {
                this.mapScoresFormations.set(lf, NaN)
              }
            }
          }
        }
      }
    )
  }

  accueil() {
    this.router.navigateByUrl('participant');
  }

  test() {

  }


}

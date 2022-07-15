import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { Quiz } from 'src/app/models/Quiz.model';
import { GetAllService } from 'src/app/services/get-all.service';
import { Score } from 'src/app/models/Score.model';
@Component({
  selector: 'app-faire-quiz',
  templateUrl: './faire-quiz.component.html',
  styleUrls: ['./faire-quiz.component.css']
})
export class FaireQuizComponent implements OnInit {

  userString!: any
  userObject!: Participant;

  formation!: Formation
  listeQuiz!: Quiz[]
  reponseChoisie!: any;

  n!: any
  cpt!: number
  cpt2!: number
  cptt!: number
  score!:Score

  constructor(private allService: GetAllService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.userString = sessionStorage.getItem('user');
    this.userObject = JSON.parse(this.userString);
    this.getFormation();
  }

  getFormation() {
    const id = +this.route.snapshot.params['id']
    this.allService.getByIdFormation(id).subscribe(
      response => {
        this.formation = response;
        this.listeQuiz = response.listeQuiz
      })
  }


  savequiz(id: number) {
    this.cptt = 0;
    for (let i = 0; i < this.listeQuiz.length; i = i + 1) {
      if (this.listeQuiz[i].idQuiz == id) {
        for (let j = 0; j < this.listeQuiz[i].questions.length; j = j + 1) {
          this.cpt = this.listeQuiz[i].questions[j].nbBonnesReponses
          this.cpt2 = 0
          for (let k = 0; k < this.listeQuiz[i].questions[j].reponses.length; k = k + 1) {
            this.n = document.getElementById("" + this.listeQuiz[i].questions[j].reponses[k].idReponse);
            if (this.listeQuiz[i].questions[j].reponses[k].vrai == this.n.checked) { this.cpt2 = this.cpt2 + 1}
          }
          if (this.cpt == this.cpt2) { this.cptt = this.cptt + 1 }
        }
        if (((this.cptt/this.listeQuiz[i].questions.length)-(this.cptt/this.listeQuiz[i].questions.length)%1)*100>=this.listeQuiz[i].pourcentage)
        {
         console.log("reussite")
        }
        else
        {
          console.log("echec")
        }

        this.allService.getByIdParticipant(this.userObject.idUtilisateur).subscribe(
          reponse=>{
            this.score =new Score;
            this.score.quiz=this.listeQuiz[i]
            this.score.score=((this.cptt/this.listeQuiz[i].questions.length)-(this.cptt/this.listeQuiz[i].questions.length)%1)*100
            reponse.scores.push(this.score)
            this.allService.insererScore(this.score).subscribe(
              rep=>
             this.allService.modifierParticipant(reponse).subscribe()
            )
          }
        )
      }
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/models/Question.model';
import { Quiz } from 'src/app/models/Quiz.model';
import { Reponse } from 'src/app/models/Reponse.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-modifquiz',
  templateUrl: './modifquiz.component.html',
  styleUrls: ['./modifquiz.component.css']
})
export class ModifquizComponent implements OnInit {


  quiz!: Quiz

  //questions!:Question[]
  question !: Question
  n!: any
  cpt!: number


  reponse!: Reponse

  //reponses!:any[]

  //reponse!:Reponse[]

  constructor(private router: Router, private Service: GetAllService, private route: ActivatedRoute) { }



  ngOnInit(): void {

    this.quiz = new Quiz();
    this.recuperer();

  }


  recuperer() {
    const id = +this.route.snapshot.params['id'];

    this.Service.getByIdQuiz(id).subscribe(
      response => {
        console.log("bouh")
        this.quiz = response
      });
  }


  SaveQuiz() {
    this.Service.modifierQuiz(this.quiz).subscribe();
    this.router.navigateByUrl('afficherQuiz')
  }

  SaveQuestion(id: number) {
    //console.log("modq")
    for (let i = 0; i < this.quiz.questions.length; i = i + 1) {
      if (this.quiz.questions[i].idQuestion == id) {
        this.Service.modifierQuestion(this.quiz.questions[i], this.quiz.idQuiz).subscribe();
        const myTimeout = setTimeout(this.a, 300);
      }
    }
  }

  SaveReponse(id: number) {
    for (let i = 0; i < this.quiz.questions.length; i = i + 1) {
      for (let j = 0; j < this.quiz.questions[i].reponses.length; j = j + 1) {
        if (this.quiz.questions[i].reponses[j].idReponse == id) {
          //console.log(this.quiz.questions[i].reponses[j].idReponse)
          this.n = document.getElementById("" + this.quiz.questions[i].reponses[j].idReponse);
          this.quiz.questions[i].reponses[j].vrai = this.n.checked;
          this.Service.modifierReponse(this.quiz.questions[i].reponses[j], this.quiz.questions[i].idQuestion).subscribe();
          this.cpt = 0;
          for (let k = 0; k < this.quiz.questions[i].reponses.length; k = k + 1) {
            console.log(this.quiz.questions[i].reponses[k].vrai)
            if (this.quiz.questions[i].reponses[k].vrai) {
              this.cpt = this.cpt + 1;
            }
            console.log(this.cpt)
            this.quiz.questions[i].nbBonnesReponses = this.cpt;
            this.Service.modifierQuestion(this.quiz.questions[i], this.quiz.idQuiz).subscribe();
          }
        }
      }
    }
    const myTimeout = setTimeout(this.a, 300);
  }


  ajouterq() {
    console.log("ajoq")
    this.n = document.getElementById("idq")
    console.log(this.n.value)
    for (let i = 0; i < this.n.value; i = i + 1) {
      this.question = new Question();
      this.question.question = "inserer votre question"
      this.question.nbBonnesReponses = 0
      this.question.explication = "inserer votre explication"
      console.log(this.question)
      this.Service.insererQuestion(this.question, this.quiz.idQuiz).subscribe();
    }
    const myTimeout = setTimeout(this.a, 300);
  }

  ajouterr(id: number) {
    console.log("ajor")
    this.n = document.getElementById("q" + id)
    console.log(this.n.value)
    for (let i = 0; i < this.n.value; i = i + 1) {
      this.reponse = new Reponse();
      this.reponse.reponse = "inserer votre nouvel reponse";
      this.reponse.vrai = false;
      console.log(this.reponse)
      this.Service.insererReponse(this.reponse, this.quiz.questions[i].idQuestion).subscribe();
    }
    console.log("ajor")
    const myTimeout = setTimeout(this.a, 10000);
  }


  supprimerq(id: number) {
    console.log("supq")
    this.Service.deleteQuestion(id).subscribe()
    const myTimeout = setTimeout(this.a, 200);
  }

  supprimerr(id: number) {
    console.log("supr")
    this.Service.deleteReponse(id).subscribe()
    const myTimeout = setTimeout(this.a, 200);
  }



  a() {
    location.reload();
  }
}






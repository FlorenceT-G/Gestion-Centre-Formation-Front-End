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
    console.log("bouh")
    this.Service.getByIdQuiz(id).subscribe(
      response => {
        console.log("bouh")
        this.quiz = response
      });
  }


  SaveQuiz() {
    this.Service.modifierQuiz(this.quiz).subscribe();
    this.router.navigateByUrl('admin')
  }

  ajouterq() {
    this.n = document.getElementById("idq")
    for (let i = 1; i < this.n; i = i + 1) {
      this.question = new Question();
      this.question.Quiz = this.quiz;
      this.Service.insererQuestion(this.question).subscribe();
    }
    this.router.navigateByUrl('admin')
  }


  ajouterr(id: number) {
    this.n = document.getElementById("idr")
    this.Service.getByIdQuestion(id).subscribe(
      quest => {
        for (let i = 0; i < this.n; i = i + 1) {
          this.reponse = new Reponse();
          this.reponse.question = quest;
          this.Service.insererReponse(this.reponse).subscribe();
        }
        this.router.navigateByUrl('admin')
      }
    )
  }

  SaveQuestion(id: number) {
    for (let i = 0; i < this.quiz.questions.length; i = i + 1) {



    //this.Service.getByIdQuestion(id).subscribe(
    //reponse=>
    //  this.Service.modifierQuestion(reponse)
    // )
    this.Service.modifierQuestion(this.question).subscribe();
    this.router.navigateByUrl('afficherQuiz')
  }
  }



  SaveReponse(id: number) {
    this.Service.modifierReponse(this.reponse).subscribe();
    this.router.navigateByUrl('afficherQuiz')
  }









  supprimerq(id: number) {
    this.Service.deleteQuestion(id).subscribe()
    const myTimeout = setTimeout(this.a, 200);
  }

  supprimerr(id: number) {
    this.Service.deleteReponse(id).subscribe()
    const myTimeout = setTimeout(this.a, 200);
  }



  a() {
    location.reload();
  }
}






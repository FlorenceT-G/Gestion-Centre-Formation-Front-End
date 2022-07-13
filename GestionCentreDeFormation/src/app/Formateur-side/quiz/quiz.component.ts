import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/Quiz.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quizs!:Quiz

  constructor(private service:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.selectAll()
  }

  selectAll() {
    this.service.getAllQuiz().subscribe(
      response => {
        this.quizs = response
      }
    )
  }

  supprimer(id!:number) {
    this.service.deleteQuiz(id).subscribe(
      response => this.router.navigateByUrl("afficherQuiz")
    )
  }

  modifier(id!:number) {
    this.router.navigateByUrl(""+id)
  }

}

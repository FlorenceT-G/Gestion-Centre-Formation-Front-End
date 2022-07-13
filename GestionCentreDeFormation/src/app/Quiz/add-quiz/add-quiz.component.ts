import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from 'src/app/models/Quiz.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz!:Quiz

  constructor(private service:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.quiz = new Quiz()
  }

  SaveQuiz() {
    this.service.insererQuiz(this.quiz).subscribe()
    this.router.navigateByUrl("afficherQuiz")

  }
}
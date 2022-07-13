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


  quiz!:Quiz

  //questions!:Question[]

  //reponses!:any[]

  //reponse!:Reponse[]
 
  constructor(private router: Router, private Service: GetAllService, private route:ActivatedRoute) { }



  ngOnInit(): void {



    this.quiz=new Quiz();
    this.recuperer();



  }



  recuperer() {
    const id=+this.route.snapshot.params['id'];
    this.Service.getByIdQuiz(id).subscribe(
    response => {
      this.quiz=response});
  }


  Savequiz(){
    this.Service.modifierQuiz(this.quiz).subscribe();
    this.router.navigateByUrl('admin')
  }


  SaveQuestion(id:number){
    this.Service.getByIdQuestion(id).subscribe(
      reponse2=>
      this.Service.modifierQuestion(reponse2)






    )


    this.Service.modifierQuestion(this.uti).subscribe();
    this.router.navigateByUrl('admin')
  }

  SaveReponse(id:number){
    this.Service.modifierReponse(this.uti).subscribe();
    this.router.navigateByUrl('admin')
  }

  
}






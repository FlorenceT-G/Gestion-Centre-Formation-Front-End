import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-faire-quiz',
  templateUrl: './faire-quiz.component.html',
  styleUrls: ['./faire-quiz.component.css']
})
export class FaireQuizComponent implements OnInit {

  formation!:Formation

  constructor(private allService: GetAllService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getFormation();
  }

  getFormation(){
    const id=+this.route.snapshot.params['id']
    this.allService.getByIdFormation(id).subscribe(
      response => {this.formation=response;})
  }

}

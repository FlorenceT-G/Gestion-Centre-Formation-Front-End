import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/Assistant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-assistants',
  templateUrl: './assistants.component.html',
  styleUrls: ['./assistants.component.css']
})
export class AssistantsComponent implements OnInit {

  assistants!:Assistant[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllAssistant().subscribe(
      response => {this.assistants=response;}
    )
  }

  supprimer(id:number){
    this.allService.deleteAssistant(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherAssistants');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierAssistant/'+id);
  }

  ajouterAssistant(){
    this.router.navigateByUrl('addAssistant');
  }

  accueil(){
    this.router.navigateByUrl('');
  }


}

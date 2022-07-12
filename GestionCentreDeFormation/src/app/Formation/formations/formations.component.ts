import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formationsEncours!:Formation[]
  formationsVenir!:Formation[]
  formationsPassees!:Formation[]

  userString!:any
  userObject!:any


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.userString = sessionStorage.getItem('user')
    this.userObject = JSON.parse(this.userString)
     
    

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllFormationEnCours().subscribe(
      response => {this.formationsEncours=response;}
    )
    this.allService.getProchainesFormations().subscribe(
      response => {this.formationsVenir=response;}
    )
    this.allService.getHistoriqueFormations().subscribe(
      response => {this.formationsPassees=response;}
    )

  }

  supprimer(id:number){
    this.allService.deleteFormation(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherFormations');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierFormation/'+id);
  }

  ajouterFormation(){
    this.router.navigateByUrl('addFormation');
  }

  accueil(){
    this.router.navigateByUrl('');
  }

  voirParticipants(idFormation:number){
    this.router.navigateByUrl('afficherParticipantsByFormation/'+idFormation);
  }

}

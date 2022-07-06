import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-gestion-paiements',
  templateUrl: './a-gestion-paiements.component.html',
  styleUrls: ['./a-gestion-paiements.component.css']
})
export class AGestionPaiementsComponent implements OnInit {

  participants!:Participant[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
    
  
  }


  recuperer(){
    this.allService.getAllParticipant().subscribe(
      response => {this.participants=response;
        for (let i=0; i<this.participants.length; i=i+1){
          this.allService.getFormationByParticipant(this.participants[i].idUtilisateur).subscribe(
            response=>{this.participants[i].listeFormations=response;}
          )
        }
      }
    )
  }


  accueil(){
    this.router.navigateByUrl('a-gestion-paiements');
  }

  relancer(id:number){
    this.router.navigateByUrl('relancerParticipant/'+id);
  }


}

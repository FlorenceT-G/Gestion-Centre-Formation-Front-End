import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formation-participant',
  templateUrl: './formation-participant.component.html',
  styleUrls: ['./formation-participant.component.css']
})
export class FormationParticipantComponent implements OnInit {

  formation!:Formation;
  participants!:Participant[];

  userString!:any
  userObject!:any
  foramtionAVenir=false


  constructor(private Service : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {

    this.userString = sessionStorage.getItem('user')
    this.userObject = JSON.parse(this.userString)
    this.foramtionAVenir=false
    this.getFormation();
  }


  getFormation(){
    const id=+this.route.snapshot.params['id']
    this.Service.getByIdFormation(id).subscribe(
      res => {this.formation=res;
      this.participants=res.listeParticipants;
      
      this.Service.getProchainesFormations().subscribe(
        response=>{
          for (let i=0; i<response.length; i=i+1){
            if (response[i].idFormation==res.idFormation){
              this.foramtionAVenir=true;
            }
          }
        }
      )})
  }

  accueil(){
    this.router.navigateByUrl('afficherFormations');
  }

  inscrireParticipant(){
    this.router.navigateByUrl('a-inscription-participant');
  }

  retirer(id:number){

  }

}

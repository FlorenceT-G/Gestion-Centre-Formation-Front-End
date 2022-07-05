import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants!:Participant[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllParticipant().subscribe(
      response => {this.participants=response;}
    )
  }

  supprimer(id:number){
    this.allService.deleteParticipant(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherParticipants');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierParticipant/'+id);
  }

  ajouterParticipant(){
    this.router.navigateByUrl('addParticipant');
  }

  accueil(){
    this.router.navigateByUrl('');
  }


  formations(id:number){
    this.router.navigateByUrl('formationsParticipant/'+id);
  }

  paiement(id:number){
    this.router.navigateByUrl('paiementParticipant/'+id);
  }



}

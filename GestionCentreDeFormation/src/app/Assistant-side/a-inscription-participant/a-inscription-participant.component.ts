import { Component, OnInit } from '@angular/core';
import { Assistant } from 'src/app/models/Assistant.model';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-inscription-participant',
  templateUrl: './a-inscription-participant.component.html',
  styleUrls: ['./a-inscription-participant.component.css']
})
export class AInscriptionParticipantComponent implements OnInit {

  lProspects!:Prospect[]
  userString!:any
  userObject!:Assistant
  validUser=false

  constructor(private all:GetAllService) { }

  ngOnInit(): void {
    this.all.getProspectAInscrire().subscribe(
      liste => {
        this.lProspects = liste;
      })

    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    }

    
  }

  inscrire() {
    for(let prospect of this.lProspects) {
      this.all.insererParticpantParProspect(prospect).subscribe(
        response => {
          // la réponse récupère l'identifiant du participant juste inscrit
          // transformation de l'objet en string pour le parse en number
          var s = JSON.stringify(response);
          var id = parseInt(s);
          // envoie du mail
          this.all.sendMailInscription(id).subscribe(
            fait => this.reload()
          )
        }
      )
    }
  }

  reload() {
    this.all.getProspectAInscrire().subscribe(
      liste => {
        this.lProspects = liste
      }
    )
  }

}

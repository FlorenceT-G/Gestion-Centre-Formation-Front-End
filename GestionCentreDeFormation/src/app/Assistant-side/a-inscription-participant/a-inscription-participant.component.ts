import { Component, OnInit } from '@angular/core';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-inscription-participant',
  templateUrl: './a-inscription-participant.component.html',
  styleUrls: ['./a-inscription-participant.component.css']
})
export class AInscriptionParticipantComponent implements OnInit {

  lProspects!:Prospect[]

  constructor(private all:GetAllService) { }

  ngOnInit(): void {
    this.all.getProspectAInscrire().subscribe(
      liste => {
        this.lProspects = liste;
      }
    )
    
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-modif-participant',
  templateUrl: './modif-participant.component.html',
  styleUrls: ['./modif-participant.component.css']
})
export class ModifParticipantComponent implements OnInit {

  participant!:Participant;

  constructor(private router: Router, private ParService: GetAllService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.participant=new Participant();
    this.getParticipant();
  }

  SaveParticipant(){
    this.ParService.modifierParticipant(this.participant).subscribe();
    this.router.navigateByUrl('afficherParticipants')
  }

  getParticipant(){
    const id=+this.route.snapshot.params['id'];
    this.ParService.getByIdParticipant(id).subscribe(
      response => {
        this.participant=response});
  }


}

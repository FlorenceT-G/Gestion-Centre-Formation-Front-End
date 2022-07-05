import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.css']
})
export class AddParticipantComponent implements OnInit {

  participant!:Participant;

  constructor(private ParService : GetAllService,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.participant = new Participant();
    this.participant.password="1234";
  }

  SaveParticipant(){
    this.ParService.insererParticipant(this.participant).subscribe(
      response=>{
        this.router.navigateByUrl('afficherParticipants');
      }
    )
  }

}

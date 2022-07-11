import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Participant } from 'src/app/models/Participant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-partcipant-compte',
  templateUrl: './partcipant-compte.component.html',
  styleUrls: ['./partcipant-compte.component.css']
})
export class PartcipantCompteComponent implements OnInit {

  userString!:any
  userObject!:Participant
  validUser=false

  constructor(private service:GetAllService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user');
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString);
      this.validUser=true
    } 
  }


  saveCompte() {
    console.log(this.userObject.idUtilisateur)
    this.service.modifierParticipant(this.userObject).subscribe(
      response => {
        console.log("modif faites")
        this.reload()
      }
    )
  }

  reload() {
    this.router.navigateByUrl('participant')
  }

}

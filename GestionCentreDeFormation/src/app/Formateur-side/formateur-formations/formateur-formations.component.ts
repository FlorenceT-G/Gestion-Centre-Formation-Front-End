import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateur-formations',
  templateUrl: './formateur-formations.component.html',
  styleUrls: ['./formateur-formations.component.css']
})
export class FormateurFormationsComponent implements OnInit {
  
  f!:Formation
  formation!:Formation
  formationsEnCours!:Formation[]
  historiqueFormation!:Formation[]
  prochainesFormations!:Formation[]

  userString!:any
  userObject!:any
  validUser = false

  constructor(private service:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user')
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString)
      this.validUser = true
    }    
    console.log(this.userObject.idUtilisateur)

    this.selectAll()
  }

  selectAll() {
    this.service.getAllFormationEnCours().subscribe(
      response => {this.formationsEnCours=response;}
    )
    this.service.getProchainesFormations().subscribe(
      response => {this.prochainesFormations=response;}
    )
    this.service.getHistoriqueFormations().subscribe(
      response => {this.historiqueFormation=response;}
    )
  }

}

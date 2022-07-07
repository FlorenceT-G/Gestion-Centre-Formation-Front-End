import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormationsComponent } from 'src/app/Formation/formations/formations.component';
import { Formation } from 'src/app/models/Formation';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateur-formations',
  templateUrl: './formateur-formations.component.html',
  styleUrls: ['./formateur-formations.component.css']
})
export class FormateurFormationsComponent implements OnInit {
  
  formationFormateur!:Formation[]

  // Formations concernant tous les formateurs
  FEnCoursAll!:Formation[]
  historiqueFAll!:Formation[]
  prochainesFAll!:Formation[]
  // Formations ne concernant que le formateur identifié
  FEnCours!:Formation[]
  historiqueF!:Formation[]
  prochainesF!:Formation[]

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

    // Instanciation des listes pour éviter l'erreur "Cannot read properties of undefined (reading '0')""
    this.FEnCours = [new Formation()]
    this.historiqueF = [new Formation()]  
    this.prochainesF = [new Formation()]  

    this.selectFormationByFormateur(this.userObject.idUtilisateur)
    this.selectAll()
  }

  selectAll() {
    this.service.getAllFormationEnCours().subscribe(
      response => {
        this.FEnCoursAll=response;

        for(let i=0; i<this.FEnCoursAll.length; i++) {
          /*console.log("----------------------------------")
          console.log("Formations en cours :")
          console.log(this.FEnCoursAll[i].idFormation)
          console.log("Formations pour ce formateur :")*/
          for(let j=0; j<this.formationFormateur.length; j++) {
            //console.log(this.formationFormateur[j].idFormation)
            if(this.formationFormateur[j].idFormation==this.FEnCoursAll[i].idFormation) {
              var k = 0;
              this.FEnCours[k]=this.formationFormateur[j]
              k++
            }
          }
        }
      }
    )

    this.service.getHistoriqueFormations().subscribe(
      response => {
        this.historiqueFAll=response;

        for(let i=0; i<this.historiqueFAll.length; i++) {
          for(let j=0; j<this.formationFormateur.length; j++) { 
            if(this.formationFormateur[j].idFormation==this.historiqueFAll[i].idFormation) {
              var k = 0;
              this.historiqueF[k]=this.formationFormateur[j]
              k++
            }
          }
        }
      }
    )

    this.service.getProchainesFormations().subscribe(
      response => {
        this.prochainesFAll=response;
        for(let i=0; i<this.prochainesFAll.length; i++) {
          for(let j=0; j<this.formationFormateur.length; j++) {
            if(this.formationFormateur[j].idFormation==this.prochainesFAll[i].idFormation) {
              var k = 0;
              this.prochainesF[k]=this.formationFormateur[j]
              k++
            }
          }
        }  
      }
    )

    this.service.getHistoriqueFormations().subscribe(
      response => {
        this.historiqueFAll=response;

        for(let i=0; i<this.historiqueFAll.length; i++) {
          /*console.log("----------------------------------")
          console.log("Formations passées :")
          console.log(this.historiqueFAll[i].idFormation)
          console.log("Formations pour ce formateur :")*/
          for(let j=0; j<this.formationFormateur.length; j++) { 
            //console.log(this.formationFormateur[j].idFormation)
            if(this.formationFormateur[j].idFormation==this.historiqueFAll[i].idFormation) {
              var k = 0;
              this.historiqueF[k]=this.formationFormateur[j]
              k++
            }
          }
        }
      }
    )
  }

  selectFormationByFormateur(id:number) {
    this.service.getFormationByIdFormateur(this.userObject.idUtilisateur).subscribe(
      response => {
        this.formationFormateur=response
      }
    )
  }

}

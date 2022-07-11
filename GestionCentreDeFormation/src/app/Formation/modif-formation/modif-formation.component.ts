import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-modif-formation',
  templateUrl: './modif-formation.component.html',
  styleUrls: ['./modif-formation.component.css']
})
export class ModifFormationComponent implements OnInit {

  formation!:Formation;
  formateurs!: Formateur[];
  uti!: Utilisateur

  idFormateur!:number

  constructor(private Service : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.formation = new Formation();
    this.getFormation();
    this.recupererFormateursDispo();
  }

  SaveFormation(){
    if (this.idFormateur==null){
      this.Service.modifierFormation(this.formation).subscribe(
        response=>{
          var obj = JSON.parse(sessionStorage['user']);
          if (obj) {
            this.uti = obj;
            if (this.uti.role.libRole === "admin") {
              this.router.navigateByUrl('admin');
            }
            else{
              this.router.navigateByUrl('afficherFormations'); } 
         }
        }
      )
    }
    else{
    this.Service.getByIdFormateur(this.idFormateur).subscribe(
      response=>{this.formation.formateur=response;
      this.Service.modifierFormation(this.formation).subscribe(
      response=>{
        var obj = JSON.parse(sessionStorage['user']);
        if (obj) {
          this.uti = obj;
          if (this.uti.role.libRole === "admin") {
            this.router.navigateByUrl('admin');
          }
          else{
            this.router.navigateByUrl('afficherFormations'); } 
       }
      }
    )}
    )
  }
  }
 
  recupererFormateursDispo(){
    this.Service.getFormateurDispo().subscribe(
      response => {this.formateurs=response;}
    )
  }


  getFormation(){
    const id=+this.route.snapshot.params['id']
    this.Service.getByIdFormation(id).subscribe(
      response => {this.formation=response;})
  }

}

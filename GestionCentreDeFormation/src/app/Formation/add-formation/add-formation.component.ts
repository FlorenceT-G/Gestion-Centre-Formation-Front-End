import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {

  formation!:Formation;
  formateurs!: Formateur[];
  idFormateur!:number
  uti!: Utilisateur

  constructor(private Service : GetAllService, 
    private router : Router) { }

  ngOnInit(): void {
    this.formation = new Formation();
    this.recuperer();
  }

  SaveFormation(){
  if (this.idFormateur==null){
      this.Service.insererFormation(this.formation).subscribe(
        response=>{
          var obj = JSON.parse(sessionStorage['user']);
          if (obj) {
            this.uti = obj;
            if (this.uti.role.libRole === "admin") {
              this.router.navigateByUrl('admin');
            }
            else{
              this.router.navigateByUrl('afficherFormations');
            }}}
      )
    }
    else{
    this.Service.getByIdFormateur(this.idFormateur).subscribe(
      response=>{this.formation.formateur=response;
      this.Service.insererFormation(this.formation).subscribe(
      response=>{
        var obj = JSON.parse(sessionStorage['user']);
        if (obj) {
          this.uti = obj;
          if (this.uti.role.libRole === "admin") {
            this.router.navigateByUrl('admin');
          }
          else{
            this.router.navigateByUrl('afficherFormations');
          }}}
    )}
    )
  }
}
  
  recuperer(){
    this.Service.getFormateurDispo().subscribe(
      response => {this.formateurs=response;}
    )
  }

}

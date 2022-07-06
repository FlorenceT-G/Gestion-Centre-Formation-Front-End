import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Formation } from 'src/app/models/Formation';
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

  constructor(private Service : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.formation = new Formation();
    this.recuperer();
  }

  SaveFormation(){
    this.Service.getByIdFormateur(this.idFormateur).subscribe(
      response=>{this.formation.formateur=response;
      this.Service.insererFormation(this.formation).subscribe(
      response=>{
        this.router.navigateByUrl('afficherFormations');
      }
    )}
    )
  }
  
  recuperer(){
    this.Service.getFormateurDispo().subscribe(
      response => {this.formateurs=response;}
    )
  }

}

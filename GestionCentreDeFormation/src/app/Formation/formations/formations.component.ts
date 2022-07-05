import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formation } from 'src/app/models/Formation';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {

  formations!:Formation[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllFormationEnCours().subscribe(
      response => {this.formations=response;}
    )
  }

  supprimer(id:number){
    this.allService.deleteFormation(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherFormations');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierFormation/'+id);
  }

  ajouterFormation(){
    this.router.navigateByUrl('addFormation');
  }

  accueil(){
    this.router.navigateByUrl('');
  }

}

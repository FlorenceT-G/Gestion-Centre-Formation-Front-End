import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Paiement } from 'src/app/models/Paiement';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-paiements',
  templateUrl: './paiements.component.html',
  styleUrls: ['./paiements.component.css']
})
export class PaiementsComponent implements OnInit {

  paiements!:Paiement[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllPaiement().subscribe(
      response => {this.paiements=response;}
  
      
          )
  }

  supprimer(id:number){
    this.allService.deletePaiement(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherPaiements');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierPaiement/'+id);
  }

  ajouterPaiement(){
    this.router.navigateByUrl('addPaiement');
  }

  accueil(){
    this.router.navigateByUrl('');
  }

}

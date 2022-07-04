import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-commercials',
  templateUrl: './commercials.component.html',
  styleUrls: ['./commercials.component.css']
})
export class CommercialsComponent implements OnInit {

  commerciaux!:Commercial[]


  constructor(private allService: GetAllService, private router:Router) { }

  ngOnInit(): void {

    this.recuperer();
  }


  recuperer(){
    this.allService.getAllCommercial().subscribe(
      response => {this.commerciaux=response;}
    )
  }

  supprimer(id:number){
    this.allService.deleteCommercial(id).subscribe(
      response=>{this.recuperer();
                this.router.navigateByUrl('afficherCommerciaux');})
  }

  modifier(id:number){
    this.router.navigateByUrl('modifierCommercial/'+id);
  }

  ajouterAssistant(){
    this.router.navigateByUrl('addCommercial');
  }

  accueil(){
    this.router.navigateByUrl('');
  }

}

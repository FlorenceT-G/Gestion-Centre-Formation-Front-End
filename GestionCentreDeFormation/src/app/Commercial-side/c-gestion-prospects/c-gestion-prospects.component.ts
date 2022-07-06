import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Prospect } from 'src/app/models/Prospect';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-c-gestion-prospects',
  templateUrl: './c-gestion-prospects.component.html',
  styleUrls: ['./c-gestion-prospects.component.css']
})
export class CGestionProspectsComponent implements OnInit {

  lProspects!: Prospect[]
  constructor(private all:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.all.getProspectNonInscrits().subscribe(
      liste => {
        this.lProspects = liste;
      } 
    );
  }

  AInscrire(p:Prospect) {
    p.ainscrire = true;

    this.all.modifierProspect(p).subscribe(
      reload => this.reload()
    )

  }

  reload() {
    this.all.getProspectNonInscrits().subscribe(
      liste => {
        this.lProspects = liste;
      } 
    );
  }

  afficherCR(id:number) {
    this.router.navigateByUrl('c-afficher-cr/' + id)
  }

  ajouterDate(id:number) {
    this.router.navigateByUrl("commercial-ajout-contact/" + id)
  }

}

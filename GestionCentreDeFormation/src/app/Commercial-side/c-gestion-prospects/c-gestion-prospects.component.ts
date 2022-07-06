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
  prospect!:Prospect
  constructor(private all:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.all.getProspectNonInscrits().subscribe(
      liste => {
        this.lProspects = liste;
      } 
    );
  }

  AInscrire(id:number) {
    console.log("works")
    this.all.getByIdProspect(id).subscribe(
      prospect => {
        console.log("this is true")
        this.prospect = prospect;
        this.prospect.aInscrire = true;
      }
    )

    this.all.modifierProspect(this.prospect).subscribe(
      reload => {
        this.reload()
      }
    );

  }

  reload() {
    this.router.navigateByUrl("c-gestion-prospects")
  }

  afficherCR() {

  }
  ajouterDate(id:number) {
    this.router.navigateByUrl("commercial-ajout-contact/" + id)
  }

}

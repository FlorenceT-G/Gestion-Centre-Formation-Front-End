import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateurs',
  templateUrl: './formateurs.component.html',
  styleUrls: ['./formateurs.component.css']
})
export class FormateursComponent implements OnInit {

  formateurs!:Formateur[]

  constructor(private service:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.selectAll()
  }

  selectAll() {
    this.service.getAllFormateur().subscribe(
      response => this.formateurs=response
    )
  }

  supprimer(id:number) {
    this.service.deleteFormateur(id).subscribe(
      response => {
        this.selectAll();
        this.router.navigateByUrl("afficherFormateurs");
      }
    )
  }

  retour() {
    this.router.navigateByUrl("")
  }

  redirigerAjout() {
    this.router.navigateByUrl("")
  }
  

}

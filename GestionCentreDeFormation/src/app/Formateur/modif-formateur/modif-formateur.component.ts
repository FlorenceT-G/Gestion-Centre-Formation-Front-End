import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formateur } from 'src/app/models/Formateur';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-modif-formateur',
  templateUrl: './modif-formateur.component.html',
  styleUrls: ['./modif-formateur.component.css']
})
export class ModifFormateurComponent implements OnInit {

  formateur!:Formateur
  uti!: Utilisateur

  constructor(private service:GetAllService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formateur= new Formateur()
    this.getFormateur()
  }
  
  saveFormateur() {
    this.service.modifierFormateur(this.formateur).subscribe(
      response =>{
        var obj = JSON.parse(sessionStorage['user']);
        if (obj) {
          this.uti = obj;
          if (this.uti.role.libRole === "admin") {
            this.router.navigateByUrl('admin');
          }
          else{
            this.router.navigateByUrl("afficherFormateurs") } 
       }
      })
  }
  
  getFormateur(){
    const id=+this.route.snapshot.params['id']
    this.service.getByIdFormateur(id).subscribe(
      response => this.formateur=response)
  }

}

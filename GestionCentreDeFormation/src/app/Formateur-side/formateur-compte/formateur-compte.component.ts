import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateur-compte',
  templateUrl: './formateur-compte.component.html',
  styleUrls: ['./formateur-compte.component.css']
})
export class FormateurCompteComponent implements OnInit {

  userString!:any
  userObject!:any
  utilisateur!:Utilisateur
  validUser = false

  constructor(private service:GetAllService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur()
    // this.getCompte()
    
    this.userString = sessionStorage.getItem('user')
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString)
      this.validUser = true
    }
  }

  saveCompte() {
    this.service.modifierUtilisateur(this.utilisateur).subscribe(
      response => this.router.navigateByUrl('formateur')
      // Créer le chemin pour revenir à l'accueil en tant que formateur
    )
  }

  getCompte() {
    const id=+this.route.snapshot.params['id'];
    this.service.getByIdUtilisateur(id).subscribe(
      response => {
        this.utilisateur=response});
  }

}

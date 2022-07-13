import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-ajoutadmin',
  templateUrl: './ajoutadmin.component.html',
  styleUrls: ['./ajoutadmin.component.css']
})
export class AjoutadminComponent implements OnInit {

  utilisateur!:Utilisateur;
  
  constructor(private Service : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.utilisateur = new Utilisateur();
  }

  Save(){
    this.Service.insererUtilisateur(this.utilisateur).subscribe(
      response=>{
        this.router.navigateByUrl('admin');
      }
    )
  }
}
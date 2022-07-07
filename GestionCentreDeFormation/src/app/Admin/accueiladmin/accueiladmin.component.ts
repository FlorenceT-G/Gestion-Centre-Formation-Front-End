import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-accueiladmin',
  templateUrl: './accueiladmin.component.html',
  styleUrls: ['./accueiladmin.component.css']
})
export class AccueiladminComponent implements OnInit {



uti!: Utilisateur;


constructor(private router: Router, private Service: GetAllService, private route:ActivatedRoute) { }


ngOnInit(): void {
  this.uti=new Utilisateur();
  this.getuti();

  this.uti.adresseMail
}



Saveuti(){
  this.Service.modifierUtilisateur(this.uti).subscribe();
  this.router.navigateByUrl('admin')
}



getuti(){
  const id=+this.route.snapshot.params['id'];
  this.Service.getByIdUtilisateur(id).subscribe(
    response => {
      this.uti=response});
}

  }


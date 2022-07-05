import { Component, OnInit } from '@angular/core';

import {formatDate} from '@angular/common';
import { Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';
import { Formation } from 'src/app/models/Formation';


//formatDate(new Date(),'dd/MM/yyyy', 'fr');


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formation !: Formation[];


  form !: Formation;

  a !: number;
  b !: number;
  

  constructor(private router:Router,private Service:GetAllService) { }

  ngOnInit(): void {

    this.formationencours();



  }


  formationencours(){
    this.Service.getAllFormationEnCours().subscribe(
      reponse=>
      {
        for (let i = 0; i < reponse.length; i = i + 1) {
          reponse[i].dateDebut = new Date(reponse[i].dateDebut);
          reponse[i].dateFin = new Date(reponse[i].dateFin);
        }
      this.formation = reponse


      var date1 = reponse[0].dateDebut;
      var date2 = reponse[0].dateFin;


      //var date1 = new Date(reponse[0].dateDebut);
      //var date2 = new Date(reponse[0].dateFin);
      var Diff_temps = date2.getTime() - date1.getTime(); 
      var Diff_jours = Diff_temps / (1000 * 3600 * 24); 
  
      console.log(Diff_jours)

 
    
      console.log(this.a-this.b )
    //var Diff_jours = Diff_temps / (1000 * 3600 * 24); 


      })


  }



}


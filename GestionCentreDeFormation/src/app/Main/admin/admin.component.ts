import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';
import { Formation } from 'src/app/models/Formation';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formation !: Formation[];
  date !: Date;


  duree!: String[];





  constructor(private router: Router, private Service: GetAllService) { }




  

  ngOnInit(): void {

    this.date = new Date();
    this.duree =[];
   

    this.formationencours();


    console.log(this.duree);




  }


  formationencours() {
    this.Service.getAllFormationEnCours().subscribe(
      reponse => {
        for (let i = 0; i < reponse.length; i = i + 1) {
          reponse[i].dateDebut = new Date(reponse[i].dateDebut);
          reponse[i].dateFin = new Date(reponse[i].dateFin);          
          this.duree.push(this.progression(reponse[i]))
          console.log("this.du re e")
          console.log(reponse[i].listeParticipants[0])
        }

        //this.progression(reponse[0]);
        this.formation = reponse
      })}


      // ########################################################################

      progression(form : Formation){
        /*
        console.log((((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)-
        ((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)%1).toString()+"%")
        */
       // console.log(form.participant.length);


        return ((((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)-
        ((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)%1).toString()+"%")

      }





  /*
  Number Diff_temps = form.dateFin.getTime() -  form.dateDebut.getTime()
  var Diff_jours = Diff_temps / (1000 * 3600 * 24); 

 */
  



}


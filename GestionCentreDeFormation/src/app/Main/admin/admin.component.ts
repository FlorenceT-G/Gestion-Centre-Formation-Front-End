import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';
import { Formation } from 'src/app/models/Formation';
import { Assistant } from 'src/app/models/Assistant.model';
import { Commercial } from 'src/app/models/Commercial.model';
import { Formateur } from 'src/app/models/Formateur';
import { Participant } from 'src/app/models/Participant.model';
import { Utilisateur } from 'src/app/models/Utilisateur.model';


import 'chart.js';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formation !: Formation[];
  date !: Date;
  compteur!:number[]
  duree!: String[];

  //diff utilisateur
Assistants !: Assistant[]
Commercials !:  Commercial[]
Formateurs !: Formateur[]
Participants !:Participant[]
Utilisateurs !:Utilisateur[]

recette!: number[];



  constructor(private router: Router, private Service: GetAllService) { }




  

  ngOnInit(): void {

    this.date = new Date();
    this.duree =[];
    this.compteur=[];

    this.recette=[];
   

    this.formationencours();

    this.recuperer();


  




  }

Paiement(){

  this.Service.getAllPaiement().subscribe(
    reponse =>
    {  for (let i = 0; i < reponse.length; i = i + 1) {
      //this.recette.push=reponse[i].montant;


    }

    }
  )



}





  formationencours() {
    this.Service.getAllFormationEnCours().subscribe(
      reponse => {

        for (let i = 0; i < reponse.length; i = i + 1) {
          reponse[i].dateDebut = new Date(reponse[i].dateDebut);
          reponse[i].dateFin = new Date(reponse[i].dateFin);          
          this.duree.push(this.progression(reponse[i]))
          this.compteur.push(this.duree.length-1)
          console.log("this.du re e")
          console.log(reponse[i].listeParticipants[0])
        }

        //this.progression(reponse[0]);
        this.formation = reponse
      })}


      // ########################################################################

      progression(form : Formation){
     
        return ((((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)-
        ((this.date.getTime()-form.dateDebut.getTime()) / (form.dateFin.getTime()-form.dateDebut.getTime())*100)%1).toString()+"%")

      }

recuperer(){
  this.Service.getAllFormateur().subscribe
  (reponse => 
    {      this.Formateurs = reponse  }      )

    this.Service.getAllUtilisateur().subscribe
    (      reponse => 
      {        this.Utilisateurs = reponse    }        )

        this.Service.getAllAssistant().subscribe
    (      reponse => 
      {        this.Assistants = reponse    }        )

        this.Service.getAllCommercial().subscribe
    (      reponse =>
             {        this.Commercials = reponse    }        )

        this.Service.getAllParticipant().subscribe
    (      reponse => 
      {        this.Participants = reponse    }        )
}




// gestion des utilisateur

supprimera(id:number){
  this.Service.deleteAssistant(id).subscribe()
  const myTimeout = setTimeout(this.a, 300);
         }

modifiera(id:number){
  this.router.navigateByUrl('modifierAssistant/'+id);
}

ajouterAssistant(){
  this.router.navigateByUrl('addAssistant');
}


supprimerc(id:number){
  this.Service.deleteCommercial(id).subscribe()
  const myTimeout = setTimeout(this.a, 300);
         }
modifierc(id:number){
  this.router.navigateByUrl('modifierCommercial/'+id);
}
ajouterComm(){
  this.router.navigateByUrl('addCommercial');
}


supprimerf(id:number) {
  this.Service.deleteFormateur(id).subscribe()
  const myTimeout = setTimeout(this.a, 300);
         }
ajouterF() {
  this.router.navigateByUrl("addFormateur")
}

redirectionModifierf(id:number) {
  this.router.navigateByUrl("modifierFormateur/"+id)
}


supprimerp(id:number){
  this.Service.deleteParticipant(id).subscribe()
     const myTimeout = setTimeout(this.a, 300);
            }

modifierp(id:number){
  this.router.navigateByUrl('modifierParticipant/'+id);
}

ajouterParticipant(){
  this.router.navigateByUrl('addParticipant');
}

supprimeru(id:number){
  this.Service.deleteUtilisateur(id).subscribe()
  const myTimeout = setTimeout(this.a, 300);
         }

modifieru(id:number){
  this.router.navigateByUrl('modifierUtilisateur/'+id);
}

ajouterutil(){
  this.router.navigateByUrl('addUtilisateur');
}

/*
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################

################################################################################################################################################################################
*/


 barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 //barChartType: string = 'bar';
 barChartLegend: boolean = true;

 barChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

// events
 chartClicked(e: any): void {
    console.log(e);
}

 chartHovered(e: any): void {
    console.log(e);
}
/*
################################################################################################################################################################################
*/



barChartOptions2: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
barChartLabels2: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 //barChartType2: string = 'line';
 barChartLegend2: boolean = true;

 barChartData2: any[] = [
  { data: [0, 10, 80, 20, 40, 55, 40], label: 'Series A' },
  { data: [100, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];

// events
 chartClicked2(e: any): void {
    console.log(e);
}

 chartHovered2(e: any): void {
    console.log(e);
}









/*
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################
################################################################################################################################################################################

################################################################################################################################################################################
*/







a(){
  location.reload();
}



accueil(){
  this.router.navigateByUrl('');
}
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';
import { Formation } from 'src/app/models/Formation';
import { Assistant } from 'src/app/models/Assistant.model';
import { Commercial } from 'src/app/models/Commercial.model';
import { Formateur } from 'src/app/models/Formateur';
import { Participant } from 'src/app/models/Participant.model';
import { Utilisateur } from 'src/app/models/Utilisateur.model';




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



  constructor(private router: Router, private Service: GetAllService) { }




  

  ngOnInit(): void {

    this.date = new Date();
    this.duree =[];
    this.compteur=[];
   

    this.formationencours();

    this.recuperer();


  




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
  this.Service.deleteAssistant(id).subscribe(
    response=>{this.recuperer();
              this.router.navigateByUrl('afficherAssistants');})
}

modifiera(id:number){
  this.router.navigateByUrl('modifierAssistant/'+id);
}

ajouterAssistant(){
  this.router.navigateByUrl('addAssistant');
}


supprimerc(id:number){
  this.Service.deleteCommercial(id).subscribe(
    response=>{
              this.router.navigateByUrl('admin');})
}
modifierc(id:number){
  this.router.navigateByUrl('modifierCommercial/'+id);
}
ajouterComm(){
  this.router.navigateByUrl('addCommercial');
}


supprimerf(id:number) {
  this.Service.deleteFormateur(id).subscribe(
    response => {
      this.router.navigateByUrl("admin");
    }
  )
}
ajouterF() {
  this.router.navigateByUrl("addFormateur")
}

redirectionModifierf(id:number) {
  this.router.navigateByUrl("modifierFormateur/"+id)
}


supprimerp(id:number){
  this.Service.deleteParticipant(id).subscribe(
    response=>{this.recuperer();
              this.router.navigateByUrl('afficherParticipants');})
}

modifierp(id:number){
  this.router.navigateByUrl('modifierParticipant/'+id);
}

ajouterParticipant(){
  this.router.navigateByUrl('addParticipant');
}

supprimeru(id:number){
  this.Service.deleteUtilisateur(id).subscribe(
    response=>{
              this.router.navigateByUrl('afficherParticipants');})
}

modifieru(id:number){
  this.router.navigateByUrl('modifierUtilisateur/'+id);
}

ajouterutil(){
  this.router.navigateByUrl('addUtilisateur');
}





















accueil(){
  this.router.navigateByUrl('');
}
}


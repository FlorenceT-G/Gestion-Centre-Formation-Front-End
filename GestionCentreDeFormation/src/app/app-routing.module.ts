import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AAccueilComponent } from './Assistant-side/a-accueil/a-accueil.component';
import { ACompteComponent } from './Assistant-side/a-compte/a-compte.component';
import { AGestionPaiementsComponent } from './Assistant-side/a-gestion-paiements/a-gestion-paiements.component';
import { AInscriptionParticipantComponent } from './Assistant-side/a-inscription-participant/a-inscription-participant.component';
import { AddAssistantComponent } from './Assistant/add-assistant/add-assistant.component';
import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { ModifAssistantComponent } from './Assistant/modif-assistant/modif-assistant.component';
import { CAccueilComponent } from './Commercial-side/c-accueil/c-accueil.component';
import { AddCommercialComponent } from './Commercial/add-commercial/add-commercial.component';
import { CommercialsComponent } from './Commercial/commercials/commercials.component';
import { ModifCommercialComponent } from './Commercial/modif-commercial/modif-commercial.component';
import { FormateurAccueilComponent } from './Formateur-side/formateur-accueil/formateur-accueil.component';
import { FormateurCompteComponent } from './Formateur-side/formateur-compte/formateur-compte.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { ModifFormateurComponent } from './Formateur/modif-formateur/modif-formateur.component';
import { AddFormationComponent } from './Formation/add-formation/add-formation.component';
import { FormationsComponent } from './Formation/formations/formations.component';
import { ModifFormationComponent } from './Formation/modif-formation/modif-formation.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Main/admin/admin.component';
import { AddParticipantComponent } from './Participant/add-participant/add-participant.component';
import { ModifParticipantComponent } from './Participant/modif-participant/modif-participant.component';
import { ParticipantsComponent } from './Participant/participants/participants.component';
import { CGestionProspectsComponent } from './Commercial-side/c-gestion-prospects/c-gestion-prospects.component';
import { CAjoutContactComponent } from './Commercial-side/c-ajout-contact/c-ajout-contact.component';
import { AddFormateurComponent } from './Formateur/add-formateur/add-formateur.component';
import { FormateurFormationsComponent } from './Formateur-side/formateur-formations/formateur-formations.component';
import { PaiementsComponent } from './Paiement/paiements/paiements.component';
import { AddPaiementComponent } from './Paiement/add-paiement/add-paiement.component';
import { ModifPaiementComponent } from './Paiement/modif-paiement/modif-paiement.component';
import { CAfficherCrComponent } from './Commercial-side/c-afficher-cr/c-afficher-cr.component';
import { CCompteComponent } from './Commercial-side/c-compte/c-compte.component';
import { AccueiladminComponent } from './Admin/accueiladmin/accueiladmin.component';
import { ParticipantAccueilComponent } from './Participant-side/participant-accueil/participant-accueil.component';
import { PartcipantCompteComponent } from './Participant-side/partcipant-compte/partcipant-compte.component';
import { ParticipantPaiementsComponent } from './Participant-side/participant-paiements/participant-paiements.component';
import { AddPaiementParticipantComponent } from './Participant-side/add-paiement-participant/add-paiement-participant.component';
import { ParticipantFormationsComponent } from './Participant-side/participant-formations/participant-formations.component';
import { AjoutadminComponent } from './Admin/ajoutadmin/ajoutadmin.component';
import { FormationParticipantComponent } from './Formation/formation-participant/formation-participant.component';

const routes: Routes = [
  { path:'afficherAssistants',component:AssistantsComponent},
  { path:'addUtilisateur',component:AjoutadminComponent},
  { path: 'addAssistant',component: AddAssistantComponent},
  { path: 'afficherFormateurs', component: FormateursComponent},
  { path: 'modifu/:id', component: AccueiladminComponent},
  { path: 'login', component: LoginComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'commercial',component: CAccueilComponent},
  { path: 'participant',component: ParticipantAccueilComponent},
  { path: 'participant',component: AdminComponent},
  { path: 'modifierAssistant/:id',component: ModifAssistantComponent},
  { path: 'afficherCommerciaux',component: CommercialsComponent},
  { path: 'addCommercial',component: AddCommercialComponent},
  { path: 'modifierCommercial/:id',component: ModifCommercialComponent},
  { path: 'afficherParticipants',component: ParticipantsComponent},
  { path: 'addParticipant',component: AddParticipantComponent},
  { path: 'modifierParticipant/:id',component: ModifParticipantComponent},
  { path: 'addFormateur',component: AddFormateurComponent},
  { path: 'modifierFormateur/:id',component: ModifFormateurComponent},
  { path: 'assistant', component: AAccueilComponent},
  { path: 'a-gestion-paiements', component:AGestionPaiementsComponent},
  { path: 'a-inscription-participant', component:AInscriptionParticipantComponent},
  { path: 'a-gestion-compte', component:ACompteComponent},
  { path: 'c-gestion-compte', component:CCompteComponent},
  { path: 'c-gestion-prospects', component:CGestionProspectsComponent},
  { path: 'commercial-ajout-contact/:id', component:CAjoutContactComponent},
  { path: 'c-afficher-cr/:id', component:CAfficherCrComponent},
  { path: 'afficherFormations',component: FormationsComponent},
  { path: 'addFormation',component: AddFormationComponent},
  { path: 'modifierFormation/:id',component: ModifFormationComponent},
  { path: 'a-gestion-compte', component:ACompteComponent},
  { path: 'formateur-compte', component:FormateurCompteComponent},
  { path: 'formateur-formations', component:FormateurFormationsComponent},
  { path: 'formateur-accueil', component:FormateurAccueilComponent},
  { path: 'afficherPaiements',component: PaiementsComponent},
  { path: 'addPaiement',component: AddPaiementComponent},
  { path: 'modifierPaiement/:id',component: ModifPaiementComponent},
  { path: 'participant-compte',component: PartcipantCompteComponent},
  { path: 'participant-paiements',component: ParticipantPaiementsComponent},
  { path: 'participant-formations',component: ParticipantFormationsComponent},
  { path: 'addPaiementParticipant/:id',component: AddPaiementParticipantComponent},
  { path: 'afficherParticipantsByFormation/:id',component: FormationParticipantComponent},
  
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

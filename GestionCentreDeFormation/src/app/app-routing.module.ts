import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './Admin/accueil-admin/accueil-admin.component';
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
import { AddFormateurComponent } from './Formateur/add-formateur/add-formateur.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { ModifFormateurComponent } from './Formateur/modif-formateur/modif-formateur.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Main/admin/admin.component';
import { FormateurComponent } from './Main/formateur/formateur.component';
import { AddParticipantComponent } from './Participant/add-participant/add-participant.component';
import { ModifParticipantComponent } from './Participant/modif-participant/modif-participant.component';
import { ParticipantsComponent } from './Participant/participants/participants.component';
import { CGestionProspectsComponent } from './Commercial-side/c-gestion-prospects/c-gestion-prospects.component';

const routes: Routes = [
  { path:'afficherAssistants',component:AssistantsComponent},
  { path: 'addAssistant',component: AddAssistantComponent},
  { path: 'afficherFormateurs', component: FormateursComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: AccueilAdminComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'commercial',component: CAccueilComponent},
  { path: 'formateur',component: FormateurComponent},
  { path: 'participant',component: AdminComponent},
  { path: 'modifierAssistant/:id',component: ModifAssistantComponent},
  { path: 'afficherCommerciaux',component: CommercialsComponent},
  { path: 'addCommercial',component: AddCommercialComponent},
  { path: 'modifierCommercial/:id',component: ModifCommercialComponent},
  { path: 'afficherParticipants',component: ParticipantsComponent},
  { path: 'addParticipant',component: AddParticipantComponent},
  { path: 'modifierParticipant/:id',component: ModifParticipantComponent},
  { path: 'modifierParticipant/:id',component: AInscriptionParticipantComponent},
  { path: 'addFormateur',component: AddFormateurComponent},
  { path: 'modifierFormateur/:id',component: ModifFormateurComponent},
  { path: 'assistant', component: AAccueilComponent},
  { path: 'a-gestion-paiements', component:AGestionPaiementsComponent},
  { path: 'a-inscription-participant', component:AInscriptionParticipantComponent},
  { path: 'a-gestion-compte', component:ACompteComponent}, 
  { path: 'c-gestion-prospects', component:CGestionProspectsComponent},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AAccueilComponent } from './Assistant-side/a-accueil/a-accueil.component';
import { ACompteComponent } from './Assistant-side/a-compte/a-compte.component';
import { AGestionPaiementsComponent } from './Assistant-side/a-gestion-paiements/a-gestion-paiements.component';
import { AInscriptionParticipantComponent } from './Assistant-side/a-inscription-participant/a-inscription-participant.component';
import { AddAssistantComponent } from './Assistant/add-assistant/add-assistant.component';
import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { ModifAssistantComponent } from './Assistant/modif-assistant/modif-assistant.component';
import { AddCommercialComponent } from './Commercial/add-commercial/add-commercial.component';
import { CommercialsComponent } from './Commercial/commercials/commercials.component';
import { ModifCommercialComponent } from './Commercial/modif-commercial/modif-commercial.component';
import { ContactsComponent } from './Contact/contacts/contacts.component';
import { FooterComponent } from './footer/footer.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { FormationsComponent } from './Formation/formations/formations.component';
import { HeaderComponent } from './header/header.component';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Main/admin/admin.component';
import { FormateurComponent } from './Main/formateur/formateur.component';
import { ParticipantsComponent } from './Participant/participants/participants.component';
import { ProspectsComponent } from './Prospect/prospects/prospects.component';
import { RelancesComponent } from './Relance/relances/relances.component';
import { HttpInterceptorBasicAuthService } from './services/http-interceptor-basic-auth.service';
import { AjoutadminComponent } from './Admin/ajoutadmin/ajoutadmin.component';
import { AccueiladminComponent } from './Admin/accueiladmin/accueiladmin.component';
import { UtilisateursComponent } from './Utilisateur/utilisateurs/utilisateurs.component';
import { ModifParticipantComponent } from './Participant/modif-participant/modif-participant.component';
import { AddParticipantComponent } from './Participant/add-participant/add-participant.component';
import { CommonModule } from '@angular/common';
import { AddFormateurComponent } from './Formateur/formateurs/add-formateur/add-formateur.component';
import { ModifFormateurComponent } from './Formateur/modif-formateur/modif-formateur.component';
import { CAccueilComponent } from './Commercial-side/c-accueil/c-accueil.component';
import { CGestionProspectsComponent } from './Commercial-side/c-gestion-prospects/c-gestion-prospects.component';
import { AddFormationComponent } from './Formation/add-formation/add-formation.component';
import { ModifFormationComponent } from './Formation/modif-formation/modif-formation.component';
import { FormateurAccueilComponent } from './Formateur-side/formateur-accueil/formateur-accueil.component';
import { FormateurCompteComponent } from './Formateur-side/formateur-compte/formateur-compte.component';
import { CAjoutContactComponent } from './Commercial-side/c-ajout-contact/c-ajout-contact.component';
import { CAfficherCrComponent } from './Commercial-side/c-afficher-cr/c-afficher-cr.component';


//testgrap    npm install ng2-charts --save
import { NgChartsModule } from 'ng2-charts';
import { FormateurFormationsComponent } from './Formateur-side/formateur-formations/formateur-formations.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AssistantsComponent,
    CommercialsComponent,
    ContactsComponent,
    FormateursComponent,
    FormationsComponent,
    ParticipantsComponent,
    ProspectsComponent,
    RelancesComponent,
    UtilisateursComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    FormateurComponent,
    AddAssistantComponent,
    ModifAssistantComponent,
    AddCommercialComponent,
    ModifCommercialComponent,
    AjoutadminComponent,
    AccueiladminComponent,
    AGestionPaiementsComponent,
    AInscriptionParticipantComponent,
    ACompteComponent,
    AAccueilComponent,
    AddParticipantComponent,
    ModifParticipantComponent,
    AddFormateurComponent,
    ModifFormateurComponent,
    CAccueilComponent,
    CGestionProspectsComponent,
    AddFormationComponent,
    ModifFormationComponent,
    FormateurAccueilComponent,
    FormateurCompteComponent,
    CAjoutContactComponent,
    CAfficherCrComponent,
    FormateurFormationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    //testgraph
    NgChartsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

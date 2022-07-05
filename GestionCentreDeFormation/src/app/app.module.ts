import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
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
import { UtilisateursComponent } from './Utilisateur/utilisateurs/utilisateurs.component';


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
    AccueilAdminComponent,
    AddAssistantComponent,
    ModifAssistantComponent,
    AddCommercialComponent,
    ModifCommercialComponent,
    AGestionPaiementsComponent,
    AInscriptionParticipantComponent,
    ACompteComponent,
    AAccueilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorBasicAuthService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

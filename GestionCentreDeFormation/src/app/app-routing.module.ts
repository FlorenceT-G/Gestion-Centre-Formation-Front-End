import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './Admin/accueil-admin/accueil-admin.component';
import { AddAssistantComponent } from './Assistant/add-assistant/add-assistant.component';
import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { ModifAssistantComponent } from './Assistant/modif-assistant/modif-assistant.component';
import { AddCommercialComponent } from './Commercial/add-commercial/add-commercial.component';
import { CommercialsComponent } from './Commercial/commercials/commercials.component';
import { ModifCommercialComponent } from './Commercial/modif-commercial/modif-commercial.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Main/admin/admin.component';
import { FormateurComponent } from './Main/formateur/formateur.component';


const routes: Routes = [
  { path:'afficherAssistants',component:AssistantsComponent},
  { path: 'addAssistant',component: AddAssistantComponent},
  { path: 'afficherFormateurs', component: FormateursComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: AccueilAdminComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'assistant',component: AccueilAdminComponent},
  { path: 'commercial',component: AdminComponent},
  { path: 'formateur',component: FormateurComponent},
  { path: 'participant',component: AdminComponent},
  { path: 'modifierAssistant/:id',component: ModifAssistantComponent},
  { path: 'afficherCommerciaux',component: CommercialsComponent},
  { path: 'addCommercial',component: AddCommercialComponent},
  { path: 'modifierCommercial/:id',component: ModifCommercialComponent},
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

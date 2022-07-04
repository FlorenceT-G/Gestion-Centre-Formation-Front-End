import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';
import { AddAssistantComponent } from './add-assistant/add-assistant.component';



import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './Main/admin/admin.component';
import { FormateurComponent } from './Main/formateur/formateur.component';



const routes: Routes = [
  {path:'afficherAssistants',component:AssistantsComponent},
  { path: 'login',component: LoginComponent},
  { path: 'addAssistant',component: AddAssistantComponent},
  { path: 'admin',component: AdminComponent},
  { path: 'assistant',component: AdminComponent},
  { path: 'commercial',component: AdminComponent},
  { path: 'formateur',component: FormateurComponent},
  { path: 'participant',component: AdminComponent},

  

  
  
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

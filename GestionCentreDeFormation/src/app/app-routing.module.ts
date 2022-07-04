import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';



import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { FormateursComponent } from './Formateur/formateurs/formateurs.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { AdminComponent } from './Main/admin/admin.component';
>>>>>>> fa762533366f75298526fd26876a37ca03af83e1
import { FormateurComponent } from './Main/formateur/formateur.component';



const routes: Routes = [
  {path:'afficherAssistants',component:AssistantsComponent},
<<<<<<< HEAD
  {path: 'afficherFormateurs', component: FormateursComponent},

  { path: 'login', component: LoginComponent},
  { path: '', component: AccueilAdminComponent},

=======
  { path: 'login',component: LoginComponent},

  { path: 'admin',component: AdminComponent},
  { path: 'assistant',component: AdminComponent},
  { path: 'commercial',component: AdminComponent},
  { path: 'formateur',component: FormateurComponent},
  { path: 'participant',component: AdminComponent},

  

  
  
>>>>>>> fa762533366f75298526fd26876a37ca03af83e1
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

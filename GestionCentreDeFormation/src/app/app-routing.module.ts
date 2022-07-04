import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilAdminComponent } from './accueil-admin/accueil-admin.component';



import { AssistantsComponent } from './Assistant/assistants/assistants.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'afficherAssistants',component:AssistantsComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: AccueilAdminComponent},


  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

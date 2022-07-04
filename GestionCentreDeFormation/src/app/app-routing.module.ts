import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssistantsComponent } from './Assistant/assistants/assistants.component';



const routes: Routes = [
  {path:'afficherAssistants',component:AssistantsComponent},
  
  

  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

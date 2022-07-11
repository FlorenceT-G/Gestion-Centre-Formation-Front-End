import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { Assistant } from '../../models/Assistant.model';
import { GetAllService } from '../../services/get-all.service';


@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent implements OnInit {

  assistant!:Assistant;

  
  uti!: Utilisateur

  constructor(private AssService : GetAllService,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.assistant = new Assistant();
    this.assistant.password="1234";
   
  }

  SaveAssistant(){
    this.AssService.insererAssistant(this.assistant).subscribe(
      response=>{
         var obj = JSON.parse(sessionStorage['user']);
    if (obj) {
      this.uti = obj;
      if (this.uti.role.libRole === "admin") {
        this.router.navigateByUrl('admin');
      }
      else{
        this.router.navigateByUrl('afficherAssistants');
      }}}
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assistant } from 'src/app/models/Assistant.model';
import { Utilisateur } from 'src/app/models/Utilisateur.model';
import { GetAllService } from '../../services/get-all.service';

@Component({
  selector: 'app-modif-assistant',
  templateUrl: './modif-assistant.component.html',
  styleUrls: ['./modif-assistant.component.css']
})
export class ModifAssistantComponent implements OnInit {

  uti!: Utilisateur;
  assistant!:Assistant;

  constructor(private router: Router, private AssService: GetAllService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.assistant=new Assistant();
    this.getAssistant();
  }

  SaveAssistant(){
    this.AssService.modifierAssistant(this.assistant).subscribe();
    var obj = JSON.parse(sessionStorage['user']);
    if (obj) {
      this.uti = obj;
      if (this.uti.role.libRole === "admin") {
        this.router.navigateByUrl('admin');
      }
      else{
    this.router.navigateByUrl('afficherAssistants')
      }}
  }

  getAssistant(){
    const id=+this.route.snapshot.params['id'];
    this.AssService.getByIdAssistant(id).subscribe(
      response => {
        this.assistant=response});
  }

}

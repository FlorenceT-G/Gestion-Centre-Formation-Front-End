import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assistant } from '../models/Assistant.model';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-add-assistant',
  templateUrl: './add-assistant.component.html',
  styleUrls: ['./add-assistant.component.css']
})
export class AddAssistantComponent implements OnInit {

  assistant!:Assistant;

  constructor(private AssService : GetAllService ,  private route:ActivatedRoute, 
    private router : Router) { }

  ngOnInit(): void {
    this.assistant = new Assistant();
  }

  SaveAssistant(){
    this.AssService.insererAssistant(this.assistant).subscribe(
      response=>{
        this.router.navigateByUrl('afficherAssistants');
      }
    )
  }

}

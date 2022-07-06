import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from 'src/app/models/Assistant.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-a-compte',
  templateUrl: './a-compte.component.html',
  styleUrls: ['./a-compte.component.css']
})
export class ACompteComponent implements OnInit {

  userString!:any
  userObject!:Assistant
  validUser = false

  constructor(private all:GetAllService, private router:Router) { }

  ngOnInit(): void {
    this.userString = sessionStorage.getItem('user')
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString)
      this.validUser = true
    }
  }

  modifCompte() {
    console.log("test")
    this.all.modifierAssistant(this.userObject).subscribe(
      valid => {
        console.log("valide")
        this.reload();
      }
    )
  }

  reload() {
    this.router.navigateByUrl("a-compte")
  }

}

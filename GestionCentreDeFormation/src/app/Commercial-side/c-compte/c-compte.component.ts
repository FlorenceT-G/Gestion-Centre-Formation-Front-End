import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commercial } from 'src/app/models/Commercial.model';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-c-compte',
  templateUrl: './c-compte.component.html',
  styleUrls: ['./c-compte.component.css']
})
export class CCompteComponent implements OnInit {

  userString!:any
  userObject!:Commercial
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
    this.all.modifierCommercial(this.userObject).subscribe(
      response => {
        console.log("valide")
        this.reload();
      }
    )
  }

  reload() {
    this.router.navigateByUrl("c-accueil")
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetAllService } from 'src/app/services/get-all.service';

@Component({
  selector: 'app-formateur-compte',
  templateUrl: './formateur-compte.component.html',
  styleUrls: ['./formateur-compte.component.css']
})
export class FormateurCompteComponent implements OnInit {

  userString!:any
  userObject!:any
  validUser = false

  constructor(private service:GetAllService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {    
    this.userString = sessionStorage.getItem('user')
    if(this.userString != null) {
      this.userObject = JSON.parse(this.userString)
      this.validUser = true
    }    
  }

  saveCompte() {
    console.log(this.userObject.idUtilisateur)
    this.service.modifierFormateur(this.userObject).subscribe(
      response => {
        console.log("modif faites")
        this.reload()
      }
    )
    sessionStorage.setItem('user', JSON.stringify(this.userObject));
  }

  reload() {
    this.router.navigateByUrl('formateur-accueil')
  }
}

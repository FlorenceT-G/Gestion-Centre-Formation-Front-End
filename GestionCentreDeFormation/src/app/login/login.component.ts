import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string 
  password!:string
  invalidLogin = false
  errorMessage = "identifiant et/ou mot-de-passe incorrect"

  constructor(private router:Router,private AuthService:GetAllService) { }

  ngOnInit(): void {
  }

  auth() {
    this.AuthService.authentification(this.username, this.password)
        .subscribe(
          data => 
            {
              sessionStorage.setItem('t', 'Bearer ' + data.jwt)
              this.invalidLogin = false;
              this.AuthService.getUtilisateur(this.username).subscribe(
                reponse => {
                  //console.log("reponse")
                  //console.log(reponse.nom)
                  sessionStorage.setItem('user', JSON.stringify(reponse));
                  if(reponse.role.libRole==="admin")
                  {
                    this.router.navigateByUrl('admin');
                  }
                  if(reponse.role.libRole==="assistant")
                  {
                    this.router.navigateByUrl('assistant');
                  }
                  if(reponse.role.libRole==="commercial")
                  {
                    this.router.navigateByUrl('commercial');
                  }
                  if(reponse.role.libRole==="formateur")
                  {
                    this.router.navigateByUrl('formateur');
                  }
                  if(reponse.role.libRole==="participant")
                  {
                    this.router.navigateByUrl('participant');
                  }
                }
              )
          },
          error => {
            console.log('kkkkkkkkkkkkkkkkkkkkkkkkko')
            this.invalidLogin = true
          }
        )
  }
}

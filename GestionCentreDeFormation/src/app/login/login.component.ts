import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials = {username:'', password:''}
  validUser = true
  errormessage = "identifiant et/ou mot-de-passe incorrect"

  constructor(private router:Router,private AuthService:GetAllService) { }

  ngOnInit(): void {
  }

  auth() {
    console.log(this.credentials)
    this.AuthService.authentification(this.credentials.username, this.credentials.password)
    .subscribe(
      data => {
        sessionStorage.setItem('token', 'Bearer' + data.jwt);
        this.validUser = true;
      },
      error => {
        console.log("c'est une erreur !")
        this.validUser = false;
      })
  }

}

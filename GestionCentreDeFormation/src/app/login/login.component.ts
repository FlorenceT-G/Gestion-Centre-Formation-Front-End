import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetAllService } from '../services/get-all.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;
  errorMessage = 'login pass incorrect'
  invalidLogin = false

  constructor(private router:Router,private AuthService:GetAllService) { }

  ngOnInit(): void {
  }

  auth() {
    
    this.AuthService.authentification(this.username, this.password)
        .subscribe(
          data => {
            sessionStorage.setItem('t','Bearer '+data.jwt)
            console.log(sessionStorage.getItem('t'));
            this.router.navigateByUrl('');
            this.invalidLogin = false      
          },
          error => {
            console.log('kkkkkkkkkkkkkkkkkkkkkkkkko')
            this.invalidLogin = true
          }
        )
  }

  createBasicHttpHeader()
  {
   
    let basicchaine='Basic '+window.btoa(this.username+':'+this.password);
    return basicchaine;
  }

}

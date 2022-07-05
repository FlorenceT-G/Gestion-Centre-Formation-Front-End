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
    this.AuthService.getUtilisateur(this.username).subscribe(
      reponse => {

        console.log(reponse)

      });

    this.AuthService.authentification(this.username, this.password)
        .subscribe(
          data => 
            {
              sessionStorage.setItem('token', 'Bearer ' + data.jwt)
              this.invalidLogin = false;
              console.log(sessionStorage.getItem('token'))
              this.AuthService.getUtilisateur(this.username).subscribe(
                reponse => {
                  sessionStorage.setItem('user', JSON.stringify(reponse));

                  console.log(reponse.role.libRole);
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
              this.router.navigateByUrl('admin');
          },

                    /*

              var obj = JSON.parse(sessionStorage['user']);
                if (obj)
                {
                  console.log(obj)

                  this.utilisateur=obj;
              

                  */
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

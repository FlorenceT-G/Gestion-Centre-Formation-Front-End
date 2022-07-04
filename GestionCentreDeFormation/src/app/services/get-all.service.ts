import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Assistant } from '../models/Assistant.model';
import { Formateur } from '../models/Formateur';
import { Utilisateur } from '../models/Utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:HttpClient,private router:Router) { }

//login
authentification(username:string,password:string)
{
    return this.http.post<any>('http://localhost:9090/authenticate',{username,password})
}
logout() {

  sessionStorage.removeItem('token')
  sessionStorage.removeItem('user');
  this.router.navigateByUrl('login');
}


  // ------------------------------- Formateur ------------------------------------
  getAllFormateur() {
    return this.http.get<Formateur[]>('http://localhost:9090/admin/formateur');
  }
  getByIdFormateur(id:number) {
    return this.http.get<Formateur>('http://localhost:9090/admin/formateur/'+id);
  }
  insererFormateur(f:Formateur) {
    return this.http.post('http://localhost:9090/admin/formateur', f);
  }
  modifierFormateur(id:number, f:Formateur) {
    return this.http.put('http://localhost:9090/admin/formateur/'+id, f);
  }
  deleteFormateur(id:number) {
    return this.http.delete('http://localhost:9090/admin/formateur/'+id);
  }

//Utilisateur
getAllUtilisateur(){
  return this.http.get<Utilisateur[]>('http://localhost:9090/admin/utilisateurs');
}
getUtilisateur(login:string)
{ 
  return this.http.get<Utilisateur>('http://localhost:9090/admin/utilisateurs/'+login);
}
deleteUtilisateur(id:number){
  return this.http.delete('http://localhost:9090/utilisateurs/'+id);
}
modifierUtilisateur(u:Utilisateur){
  return this.http.put('http://localhost:9090/utilisateurs', u);
}
insererUtilisateur(u:Utilisateur){
  return this.http.post('http://localhost:9090/utilisateurs', u);
}

  // ------------------------------- Assistant ------------------------------------
  getAllAssistant(){
    return this.http.get<Assistant[]>('http://localhost:9090/admin/assistants');
  }
  getByIdAssistant(id:number){
    return this.http.get<Assistant>('http://localhost:9090/admin/assistants/'+id);
  }
  deleteAssistant(id:number){
    return this.http.delete('http://localhost:9090/admin/assistants/'+id);
  }
  modifierAssistant(a:Assistant){
    return this.http.put('http://localhost:9090/admin/assistants', a);
  }
  insererAssistant(a:Assistant){
    return this.http.post('http://localhost:9090/admin/assistants', a);
  }
}
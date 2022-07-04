import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assistant } from '../models/Assistant.model';
import { Formateur } from '../models/Formateur';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:HttpClient) { }


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

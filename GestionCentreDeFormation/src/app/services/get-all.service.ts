import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assistant } from '../models/Assistant.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http:HttpClient) { }




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

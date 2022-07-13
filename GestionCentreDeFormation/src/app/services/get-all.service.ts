import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from '../models/Formateur';
import { Assistant } from '../models/Assistant.model';
import { Commercial } from '../models/Commercial.model';
import { Participant } from '../models/Participant.model';
import { Contact } from '../models/Contact';
import { Formation } from '../models/Formation';
import { Paiement } from '../models/Paiement';
import { Prospect } from '../models/Prospect';
import { Relance } from '../models/Relance';
import { Utilisateur } from '../models/Utilisateur.model';
//import { NumberValueAccessor } from '@angular/forms';
import { Quiz } from '../models/Quiz.model';
import { Question } from '../models/Question.model';
import { Reponse } from '../models/Reponse.model';
import { Score } from '../models/Score.model';



@Injectable({
  providedIn: 'root'
})
export class GetAllService {

  constructor(private http: HttpClient, private router: Router) { }

  // ------------------------------- Login & Logout ------------------------------------
  authentification(username: string, password: string) {
    return this.http.post<any>('http://localhost:9090/authenticate', {username, password})
  }

  logout() {
    sessionStorage.removeItem('t')
    sessionStorage.removeItem('user');
    this.router.navigateByUrl('login');
  }


  // ------------------------------- Quiz ------------------------------------
  getAllQuiz() {
    return this.http.get<Quiz[]>('');
  }
  getByIdQuiz(id: number) {
    return this.http.get<Quiz>('/' + id);
  }
  deleteQuiz(id: number) {
    return this.http.delete('/' + id);
  }
  modifierQuiz(a: Quiz) {
    return this.http.put<Quiz>('', a);
  }
  insererQuiz(a: Quiz) {
    return this.http.post('', a)
  }


   // ------------------------------- Question ------------------------------------
   getAllQuestion() {
    return this.http.get<Quiz[]>('');
  }
  getByIdQuestion(id: number) {
    return this.http.get<Quiz>('/' + id);
  }
  deleteQuestion(id: number) {
    return this.http.delete('/' + id);
  }
  modifierQuestion(a: Question) {
    return this.http.put<Quiz>('', a);
  }
  insererQuestion(a: Question) {
    return this.http.post('', a)
  }
  getQuestionByIdQuiz(id: number) {
    return this.http.get<Question[]>('');
  }

  
   // ------------------------------- Reponse ------------------------------------
   getAllReponse() {
    return this.http.get<Reponse[]>('');
  }
  getByIdReponse(id: number) {
    return this.http.get<Reponse>('/' + id);
  }
  deleteReponse(id: number) {
    return this.http.delete('/' + id);
  }
  modifierReponse(a: Reponse) {
    return this.http.put<Reponse>('', a);
  }
  insererReponse(a: Reponse) {
    return this.http.post('', a)
  }
  getReponseByIdQuestion(id: number) {
    return this.http.get<Reponse[]>('');
  }


   // ------------------------------- Score ------------------------------------
   getAllScore() {
    return this.http.get<Score[]>('');
  }
  getByIdScore(id: number) {
    return this.http.get<Score>('/' + id);
  }
  deleteScore(id: number) {
    return this.http.delete('/' + id);
  }
  modifierScore(a: Score) {
    return this.http.put<Score>('', a);
  }
  insererScore(a: Score) {
    return this.http.post('', a)
  }
  getScoreByIdParticipant(id: number) {
    return this.http.get<Score[]>('');
  }


  // ------------------------------- Formateur ------------------------------------
  getAllFormateur() {
    return this.http.get<Formateur[]>('http://localhost:9090/admin/formateur');
  }
  getByIdFormateur(id: number) {
    return this.http.get<Formateur>('http://localhost:9090/admin/formateur/' + id);
  }
  insererFormateur(f: Formateur) {
    return this.http.post('http://localhost:9090/admin/formateur', f);
  }
  modifierFormateur(f: Formateur) {
    return this.http.put('http://localhost:9090/formateur/formateur/', f);
  }
  deleteFormateur(id: number) {
    return this.http.delete('http://localhost:9090/admin/formateur/' + id);
  }
  getFormateurDispo() {
    return this.http.get<Formateur[]>('http://localhost:9090/formateurDispo');
  }


  // ------------------------------- Utilisateur ------------------------------------
  getAllUtilisateur() {
    return this.http.get<Utilisateur[]>('http://localhost:9090/admin/utilisateurs');
  }
  getUtilisateur(login: string) {
    return this.http.get<any>(`http://localhost:9090/utilisateurs/${login}`);
  }
  getByIdUtilisateur(id:number) {
    return this.http.get<any>('http://localhost:9090/utilisateur/'+id);
  }
 //return this.http.get<Utilisateur>('http://localhost:9090/utilisateurs/'+login);
  deleteUtilisateur(id: number) {
    return this.http.delete('http://localhost:9090/utilisateurs/' + id);
  }
  modifierUtilisateur(u: Utilisateur) {
    return this.http.put('http://localhost:9090/utilisateurs', u);
  }
  insererUtilisateur(u: Utilisateur) {
    return this.http.post('http://localhost:9090/utilisateurs', u);
  }
  

  // ------------------------------- Assistant ------------------------------------
  getAllAssistant() {
    return this.http.get<Assistant[]>('http://localhost:9090/admin/assistants');
  }
  getByIdAssistant(id: number) {
    return this.http.get<Assistant>('http://localhost:9090/admin/assistants/' + id);
  }
  deleteAssistant(id: number) {
    return this.http.delete('http://localhost:9090/admin/assistants/' + id);
  }
  modifierAssistant(a: Assistant) {
    return this.http.put<Assistant>('http://localhost:9090/assistant/assistants', a);
  }
  insererAssistant(a: Assistant) {
    return this.http.post('http://localhost:9090/admin/assistants', a)
  }
  inscrireParticipantAFormation(idUtilisateur: number, idFormation:number) {
    return this.http.get<any>('http://localhost:9090/assistant/inscrireParticipantFormation/'+idUtilisateur+'/'+idFormation);
  }



  // ------------------------------- Commercial ------------------------------------
  getAllCommercial() {
    return this.http.get<Commercial[]>('http://localhost:9090/admin/commerciaux');
  }
  getByIdCommercial(id: number) {
    return this.http.get<Commercial>('http://localhost:9090/admin/commerciaux/' + id);
  }
  deleteCommercial(id: number) {
    return this.http.delete('http://localhost:9090/admin/commerciaux/' + id);
  }
  modifierCommercial(c: Commercial) {
    return this.http.put<Commercial>('http://localhost:9090/commercial/commerciaux', c);
  }
  insererCommercial(c: Commercial) {
    return this.http.post('http://localhost:9090/admin/commerciaux', c)
  }



  // ------------------------------- Participant ------------------------------------
  getAllParticipant() {
    return this.http.get<Participant[]>('http://localhost:9090/assistant/participants');
  }
  getByIdParticipant(id: number) {
    return this.http.get<Participant>('http://localhost:9090/assistant/participants/'+id);
  }
  getParticipantByPaiementNok() {
    return this.http.get<Participant[]>('http://localhost:9090/assistant/participants-paiementsNok');
  }
  deleteParticipant(id: number) {
    return this.http.delete('http://localhost:9090/assistant/participants/'+id);
  }
  modifierParticipant(c: Participant) {
    return this.http.put('http://localhost:9090/participant', c);
  }
  insererParticipant(p: Participant) {
    return this.http.post('http://localhost:9090/assistant/participants', p)
  }
  insererParticpantParProspect(p: Prospect) {
    return this.http.post('http://localhost:9090/assistant/participantsparprospect', p)
  }

  
  
  // ------------------------------- Contact ------------------------------------
  getAllContact() {
    return this.http.get<Contact[]>('http://localhost:9090/contacts');
  }
  getByIdContact(id:number) {
    return this.http.get<Contact>('http://localhost:9090/contacts/' + id);
  }
  deleteContact(id:number) {
    return this.http.delete('http://localhost:9090/contacts/' + id);
  }
  modifierContact(c:Contact) {
    return this.http.put('http://localhost:9090/contacts', c);
  }
  insererContact(c:Contact, idProspect:number, idCommercial:number) {
    return this.http.post('http://localhost:9090/contacts/' + idProspect + "/" + idCommercial, c)
  }


  // ------------------------------- Formation ------------------------------------
  getProchainesFormations() {
    return this.http.get<Formation[]>('http://localhost:9090/prochaines-formations');
  }
  getAllFormationEnCours() {
    return this.http.get<Formation[]>('http://localhost:9090/formations-en-cours');
  }
  getHistoriqueFormations() {
    return this.http.get<Formation[]>('http://localhost:9090/historiqueFormations');
  }
  getFormationByIdFormateur(id:number) {
    return this.http.get<Formation[]>('http://localhost:9090/formationFormateur/'+id);
  }
  getAllFormations() {
    return this.http.get<Formation[]>('http://localhost:9090/formations');
  }
  getByIdFormation(id:number) {
    return this.http.get<Formation>('http://localhost:9090/formations/'+id);
  }
  getFormationByParticipant(id:number) {
    return this.http.get<Formation[]>('http://localhost:9090/formationParticipant/'+id);
  }
  getFormationPasPayeesByParticipant(id:number) {
    return this.http.get<Formation[]>('http://localhost:9090/formationParticipantPasPayees/'+id);
  }
  insererFormation(f:Formation) {
    return this.http.post('http://localhost:9090/admin/formations', f);
  }
  modifierFormation(f:Formation) {
    return this.http.put('http://localhost:9090/admin/formations', f);
  }
  deleteFormation(id:number) {
    return this.http.delete('http://localhost:9090/admin/formations/' + id);
  }


  // ------------------------------- Paiement ------------------------------------
  getAllPaiement() {
    return this.http.get<Paiement[]>('http://localhost:9090/assistant/paiement');
  }

  getAllPaiementParticipant(idParticipant:number) {
    return this.http.get<Paiement[]>('http://localhost:9090/paiementParticipant/'+idParticipant);
  }

  getRestePaiement(idParticipant:number, idFormation:number) {
    return this.http.get<number>('http://localhost:9090/paiementResteByParticipant/'+idParticipant+"?idFormation="+idFormation);
  }

  getByIdPaiement(id:number) {
    return this.http.get<Paiement>('http://localhost:9090/paiement/' + id);
  }
  deletePaiement(id:number) {
    return this.http.delete('http://localhost:9090/assistant/paiement/' + id);
  }
  modifierPaiement(p:Paiement) {
    return this.http.put('http://localhost:9090/assistant/paiement', p);
  }
  insererPaiement(p:Paiement) {
    return this.http.post('http://localhost:9090/paiement', p)
  }


  // ------------------------------- Prospect ------------------------------------
  getAllProspect() {
    return this.http.get<Prospect[]>('http://localhost:9090/commercial/prospects');
  }
  getProspectNonInscrits() {
    return this.http.get<Prospect[]>('http://localhost:9090/commercial/prospects-non-inscrits');
  }
  getProspectAInscrire() {
    return this.http.get<Prospect[]>('http://localhost:9090/commercial/prospects-a-inscrire');
  }

  getByIdProspect(id:number) {
    return this.http.get<Prospect>('http://localhost:9090/commercial/prospects/' + id);
  }
  getByNomProspect(nom:string) {
    return this.http.get<Prospect>('http://localhost:9090/commercial/prospects/' + nom);
  }
  getByNumProspect(num:number) {
    return this.http.get<Prospect>('http://localhost:9090/commercial/prospect/' + num);
  }
  getByMailProspect(mail:string) {
    return this.http.get<Prospect>('http://localhost:9090/commercial/prospect/' + mail);
  }
  deleteProspect(id:number) {
    return this.http.delete('http://localhost:9090/commercial/prospects/' + id);
  }
  modifierProspect(p:Prospect) {
    return this.http.put('http://localhost:9090/commercial/prospects', p);
  }
  insererProspect(p:Prospect) {
    return this.http.post('http://localhost:9090/commercial/prospects', p)
  }
  insererProspectCsvFile(data:FormData) {
    return this.http.post('http://localhost:9090/commercial/csvFile', data)
  }


  // ------------------------------- Relance ------------------------------------
  getAllRelance() {
    return this.http.get<Relance[]>('http://localhost:9090/assistant/liste-relances');
  }
  getByIdRelance(id:number) {
    return this.http.get<Relance>('http://localhost:9090/assistant/relancesId/' + id);
  }
  getByAssistantRelance(id:number) {
    return this.http.get<Relance>('http://localhost:9090/assistant/liste-relances/' + id);
  }
  getByParticipantRelance(id:number) {
    return this.http.get<Relance>('http://localhost:9090/participant/relances/' + id);
  }
  deleteRelance(id:number) {
    return this.http.delete('http://localhost:9090/assistant/relances/' + id);
  }
  modifierRelance(r:Relance) {
    return this.http.put('http://localhost:9090/assistant/relances', r);
  }
  insererRelance(r:Relance, idParticipant:number, idAssistant:number) {
    return this.http.post('http://localhost:9090/assistant/ajoutRelance/' + idParticipant + '/' + idAssistant, r)
  }

   // ------------------------------- Mail ------------------------------------

   sendMailInscription(idParticipant:number) {
    return this.http.get<number>('http://localhost:9090/assistant/sendmailinscription/' + idParticipant)
   }
   sendMailRelancePaiement(idParticipant:number, idFormation:number) {
    console.log("envoie mail relance")
    return this.http.get('http://localhost:9090/assistant/mailrelance/' + idParticipant + '/' + idFormation)
   }
   sendMailDiploma(idParticipant:number, idFormation:number) {
    return this.http.get('http://localhost:9090/participant/send-diplome-mail/' + idParticipant + '/' + idFormation)
   }
}
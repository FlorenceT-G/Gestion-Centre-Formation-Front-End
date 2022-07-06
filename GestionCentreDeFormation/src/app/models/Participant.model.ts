import { Formateur } from "./Formateur";
import { Formation } from "./Formation";

export class Participant {

    idUtilisateur!: number;
    nom!: string;
	prenom!: string;
	adresseMail!: string;
    username!:string;
    password!:string;

    listeFormations!:Formation[]
    
}
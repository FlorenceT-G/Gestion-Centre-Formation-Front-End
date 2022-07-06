import { Contact } from "./Contact";

export class Prospect {

    idProspect!:number;
    nom!:string;
	prenom!:string;
	email!:string;
	numTel!:string;

	ainscrire!:boolean;

	contacts!:Contact[];

}